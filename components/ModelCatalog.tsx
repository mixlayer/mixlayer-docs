import React from "react";
import { Badge } from "./badge";

type Capability = "Tools" | "Reasoning" | "Vision";
type Status = "Stable" | "Beta" | "Deprecated";

type CatalogModel = {
  name: string;
  sku: string;
  contextWindow: string;
  capabilities: Capability[];
  status: Status;
  useCase: string;
};

const models: CatalogModel[] = [
  {
    name: "Qwen 3.5 4B (Free)",
    sku: "qwen/qwen3.5-4b-free",
    contextWindow: "131K",
    capabilities: ["Tools", "Reasoning", "Vision"],
    status: "Stable",
    useCase:
      "Free tier for prototyping, learning the API, and short low-stakes tasks. Smallest and lowest-latency model in the catalog; rate-limited so not for production traffic.",
  },
  {
    name: "Qwen 3.5 9B",
    sku: "qwen/qwen3.5-9b",
    contextWindow: "131K",
    capabilities: ["Tools", "Reasoning", "Vision"],
    status: "Stable",
    useCase:
      "The cheapest paid model. Good default for high-volume, simple chat, classification, and short-form summarization where cost dominates.",
  },
  {
    name: "Qwen 3.5 27B",
    sku: "qwen/qwen3.5-27b",
    contextWindow: "131K",
    capabilities: ["Tools", "Reasoning", "Vision"],
    status: "Stable",
    useCase:
      "Dense general-purpose model. Stronger than 9B on multi-step reasoning and instruction-following while staying single-stream fast.",
  },
  {
    name: "Qwen 3.5 35B (MoE, 3B active)",
    sku: "qwen/qwen3.5-35b-a3b",
    contextWindow: "131K",
    capabilities: ["Tools", "Reasoning", "Vision"],
    status: "Stable",
    useCase:
      "Fast MoE — 35B of total knowledge but only 3B parameters active per token. Use when you want broader capability than 9B at similar latency.",
  },
  {
    name: "Qwen 3.5 122B (MoE, 10B active)",
    sku: "qwen/qwen3.5-122b-a10b",
    contextWindow: "131K",
    capabilities: ["Tools", "Reasoning", "Vision"],
    status: "Stable",
    useCase:
      "High-capability MoE for complex reasoning, longer contexts, and harder coding tasks where 27B isn't enough but you don't need the frontier model.",
  },
  {
    name: "Qwen 3.5 397B (MoE, 17B active)",
    sku: "qwen/qwen3.5-397b-a17b",
    contextWindow: "131K",
    capabilities: ["Tools", "Reasoning", "Vision"],
    status: "Stable",
    useCase:
      "Frontier model. Best choice for hard reasoning, multi-step coding, agentic loops, and anywhere quality matters more than per-token cost.",
  },
];

const statusColor: Record<Status, "emerald" | "amber" | "zinc"> = {
  Stable: "emerald",
  Beta: "amber",
  Deprecated: "zinc",
};

const capabilityColor: Record<Capability, "cyan" | "violet" | "emerald"> = {
  Tools: "cyan",
  Reasoning: "violet",
  Vision: "emerald",
};

export function ModelCapabilities() {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-2 text-left">Model</th>
            <th className="p-2 text-left">Identifier</th>
            <th className="p-2 text-left">Context Window</th>
            <th className="p-2 text-left">Capabilities</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model) => (
            <tr key={model.sku}>
              <td className="align-top p-2">{model.name}</td>
              <td className="align-top p-2 text-sm font-mono whitespace-nowrap">
                {model.sku}
              </td>
              <td className="align-top p-2 whitespace-nowrap">
                {model.contextWindow}
              </td>
              <td className="align-top p-2">
                <span className="flex flex-wrap gap-1">
                  {model.capabilities.map((cap) => (
                    <Badge key={cap} color={capabilityColor[cap]}>
                      {cap}
                    </Badge>
                  ))}
                </span>
              </td>
              <td className="align-top p-2">
                <Badge color={statusColor[model.status]}>{model.status}</Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ModelUseCases() {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-2 text-left">Identifier</th>
            <th className="p-2 text-left">Use case &amp; why</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model) => (
            <tr key={model.sku}>
              <td className="align-top w-[300px] p-2 text-sm font-mono whitespace-nowrap">
                {model.sku}
              </td>
              <td className="align-top p-2">{model.useCase}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
