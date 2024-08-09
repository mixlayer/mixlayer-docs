import ModelTable from "./ModelTable";
import React from "react";

export function Models() {
  const models = [
    {
      sku: "llama3.1-8b-instruct-shared",
      price: "Free",
      details:
        "Our free, shared version of Llama 3.1 8b. This model might be subject to longer queue times.",
    },
    {
      sku: "llama3.1-8b-instruct-standard",
      price: "$0.0004/sec",
      details:
        "A smaller, less expensive version of Llama 3.1 with a smaller context size.",
    },
    {
      sku: "llama3.1-8b-instruct-large",
      price: "$0.003/sec",
      details: "A standard version of Llama 3.1 with a larger context size.",
    },
  ];

  return <ModelTable models={models} />;
}
