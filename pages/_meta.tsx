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
    title: <div className="text-zinc-50 uppercase -mb-2">Guides</div>,
  },
  "chat-completions": "Chat Completions",
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
