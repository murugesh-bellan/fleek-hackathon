import { type Api, type Model } from '@earendil-works/pi-ai';
import {
  AuthStorage,
  createAgentSession,
  createExtensionRuntime,
  createSyntheticSourceInfo,
  loadSkillsFromDir,
  ModelRegistry,
  SessionManager,
  SettingsManager,
  type AgentSession,
  type AgentToolResult,
  type ResourceLoader,
  type Skill,
  type ToolDefinition,
} from '@earendil-works/pi-coding-agent';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { config, requireOpenAIKey } from '../config.js';
import { loadPersona } from '../personas.js';
import { getBuyer } from '../db/index.js';
import type { Buyer } from '../types.js';
import { makeExtractMandateTool } from './tools/extractMandate.js';
import { findMatchesTool } from './tools/findMatches.js';
import { negotiateTool } from './tools/negotiate.js';
import { makeOfferTool } from './tools/makeOffer.js';
import { acceptDealTool } from './tools/acceptDeal.js';
import { escalateTool } from './tools/escalate.js';
import type { NegotiationRuntime } from '../negotiation.js';

const here = dirname(fileURLToPath(import.meta.url));
const skillsDir = join(here, '..', '..', 'skills');

export type Persona = 'jack' | 'jill';

export interface ToolExec {
  name: string;
  input: Record<string, unknown>;
  output: unknown;
}

export interface BuildAgentOptions {
  persona: Persona;
  /** Buyer phone (Jack only) — drives the dynamic buyer context block. */
  buyerPhone?: string;
  /** Prior conversation history to restore (AgentMessage[]). */
  history?: AgentSession['messages'];
  /** Called for each tool execution (for the memory brain / observability). */
  onToolResult?: (exec: ToolExec) => void;
  /**
   * Jill only — the negotiation runtime the Jill tools close over. Required
   * when persona === 'jill'.
   */
  jillRuntime?: NegotiationRuntime;
}

// ---------------------------------------------------------------------------
// Shared, process-wide auth + model setup (created once).
// ---------------------------------------------------------------------------

const authStorage = AuthStorage.create();
if (config.openaiApiKey) authStorage.setRuntimeApiKey('openai', config.openaiApiKey);
const modelRegistry = ModelRegistry.create(authStorage);

function resolveModel(): Model<Api> {
  const id = config.models.reasoning;
  const found = modelRegistry.find('openai', id);
  if (!found) {
    throw new Error(
      `Could not resolve model openai/${id}. Set OPENAI_API_KEY and MODEL_REASONING in .env.`,
    );
  }
  return found;
}

let _model: Model<Api> | undefined;
function model(): Model<Api> {
  return (_model ??= resolveModel());
}

// ---------------------------------------------------------------------------
// Skills — loaded once from the repo's skills/ dir, injected per persona.
// ---------------------------------------------------------------------------

const allSkills: Skill[] = loadSkillsFromDir({ dir: skillsDir, source: 'bundle' }).skills;
const skillFor = (persona: Persona): Skill[] => {
  const name = persona === 'jack' ? 'jack-sourcing' : 'jill-negotiation';
  const skill = allSkills.find((s) => s.name === name);
  if (!skill) return [];
  // Re-tag the source info so it's self-contained (no ~/.pi dependency).
  return [
    {
      ...skill,
      sourceInfo: createSyntheticSourceInfo(skill.filePath, { source: 'bundle' }),
    },
  ];
};

// ---------------------------------------------------------------------------
// System prompt — persona identity + invariants + dynamic context.
// ---------------------------------------------------------------------------

function jackSystemPrompt(buyer: Buyer | null): string {
  const persona = loadPersona('jack');
  const ctx = buyer
    ? `\n\n---\nBUYER CONTEXT\nName: ${buyer.name}\nKnown preferences: ${
        buyer.profile.brandsPursued.length
          ? buyer.profile.brandsPursued.join(', ')
          : '(none yet — this may be a new buyer)'
      }${buyer.profile.notes.length ? `\nNotes: ${buyer.profile.notes.join('; ')}` : ''}`
    : '\n\n---\nBUYER CONTEXT\nNew buyer, no profile yet.';
  return persona + ctx;
}

function jillSystemPrompt(runtime: NegotiationRuntime): string {
  const persona = loadPersona('jill');
  const { contract, bale, supplier } = runtime;
  const contractBlock = `\n\n---\nYOUR CONTRACT (hard limits — never break)\nPrice ceiling: $${contract.priceCeiling}/unit (never agree above)\nGrade floor: ${contract.gradeFloor} (never accept below)\nQuantity: at least ${contract.quantity} units (never close short)`;
  const baleBlock = `\n\n---\nTHE BALE\n${bale.description}\nCategory/era: ${bale.category}/${bale.era} | brands: ${bale.brands.join(', ')} | stated grade ${bale.grade} | ~${bale.quantity} units | supplier's opening ask: $${bale.askPrice}/unit\nSupplier: ${supplier.name}`;
  return persona + contractBlock + baleBlock;
}

// ---------------------------------------------------------------------------
// Tools per persona.
// ---------------------------------------------------------------------------

function jackTools(buyerPhone: string): ToolDefinition[] {
  return [makeExtractMandateTool(buyerPhone), findMatchesTool, negotiateTool];
}

function jillTools(runtime: NegotiationRuntime): ToolDefinition[] {
  return [makeOfferTool(runtime), acceptDealTool(runtime), escalateTool(runtime)];
}

// ---------------------------------------------------------------------------
// Minimal ResourceLoader — no ~/.pi discovery, fully self-contained.
// ---------------------------------------------------------------------------

function makeLoader(systemPrompt: string, skills: Skill[]): ResourceLoader {
  return {
    getExtensions: () => ({ extensions: [], errors: [], runtime: createExtensionRuntime() }),
    getSkills: () => ({ skills, diagnostics: [] }),
    getPrompts: () => ({ prompts: [], diagnostics: [] }),
    getThemes: () => ({ themes: [], diagnostics: [] }),
    getAgentsFiles: () => ({ agentsFiles: [] }),
    getSystemPrompt: () => systemPrompt,
    getAppendSystemPrompt: () => [],
    extendResources: () => {},
    reload: async () => {},
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Build one agent session for a persona. Jack faces the buyer; Jill faces the
 * supplier. Same factory, same loop — only the system prompt, skills, and tools
 * differ. History is restored from `options.history` (AgentMessage[]).
 */
export async function buildAgent(opts: BuildAgentOptions): Promise<AgentSession> {
  const { persona } = opts;

  // Surface a clear error if no key is configured (deferred to first build so
  // importing the module — e.g. in tests without a key — doesn't throw).
  requireOpenAIKey();

  let systemPrompt: string;
  let tools: ToolDefinition[];
  if (persona === 'jack') {
    const buyer = opts.buyerPhone ? await getBuyer(opts.buyerPhone) : null;
    systemPrompt = jackSystemPrompt(buyer);
    tools = jackTools(opts.buyerPhone ?? '');
  } else {
    if (!opts.jillRuntime) throw new Error('buildAgent: jillRuntime is required for persona "jill"');
    systemPrompt = jillSystemPrompt(opts.jillRuntime);
    tools = jillTools(opts.jillRuntime);
  }

  const { session } = await createAgentSession({
    model: model(),
    thinkingLevel: 'off',
    authStorage,
    modelRegistry,
    resourceLoader: makeLoader(systemPrompt, skillFor(persona)),
    noTools: 'builtin',
    customTools: tools,
    sessionManager: SessionManager.inMemory(),
    settingsManager: SettingsManager.inMemory({ compaction: { enabled: false } }),
  });

  // Restore prior conversation history.
  if (opts.history && opts.history.length) {
    session.agent.state.messages = [...opts.history];
  }

  // Observability / memory brain: collect tool executions.
  if (opts.onToolResult) {
    session.subscribe((event) => {
      if (event.type !== 'tool_execution_end') return;
      const result = event.result as AgentToolResult<unknown> | undefined;
      opts.onToolResult!({
        name: event.toolName,
        input: (event as { args?: unknown }).args as Record<string, unknown>,
        output: result?.details,
      });
    });
  }

  return session;
}

/**
 * Extract the last assistant text reply from a session's message history.
 */
export function lastAssistantText(session: AgentSession): string {
  const messages = session.messages;
  for (let i = messages.length - 1; i >= 0; i--) {
    const msg = messages[i];
    if (msg && msg.role === 'assistant') {
      const text = msg.content
        .filter((c): c is { type: 'text'; text: string } => c.type === 'text')
        .map((c) => c.text)
        .join('')
        .trim();
      if (text) return text;
    }
  }
  return '';
}
