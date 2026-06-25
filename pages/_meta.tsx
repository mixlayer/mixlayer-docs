import { Meta } from "nextra";

const meta: Meta = {
  index: "Introduction",

  "-----getting-started": {
    type: "separator",
    title: <div className="text-zinc-50 uppercase -mb-2">Getting Started</div>,
  },
  quickstart: "Quickstart",
  "client-libraries": "Client Libraries",
  models: "Models",

  "-----guides": {
    type: "separator",
    title: <div className="text-zinc-50 uppercase -mb-2">Inference APIs</div>,
  },
  "chat-completions": "Chat Completions",
  responses: "Responses",
  embeddings: {
    title: (
      <span className="inline-flex items-center gap-1.5">
        Embeddings
        <span className="rounded bg-amber-400/10 px-1.5 py-0.5 text-[10px] font-medium uppercase text-amber-400">
          Beta
        </span>
      </span>
    ),
  },
  "tool-calling": "Tool Calling",
  reasoning: "Reasoning",

  "-----platform": {
    type: "separator",
    title: <div className="text-zinc-50 uppercase -mb-2">Platform</div>,
  },
  pricing: "Pricing",
  api_keys: "API Keys",

  "-----integrations": {
    type: "separator",
    title: <div className="text-zinc-50 uppercase -mb-2">Integrations</div>,
  },
  pi: "Pi",
};

export default meta;
