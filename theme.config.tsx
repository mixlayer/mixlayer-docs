import React from "react";
import MixlayerLogo from "./components/MixlayerLogo";

//@ts-ignore
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <span>
      <MixlayerLogo />
    </span>
  ),
  project: {
    link: "https://github.com/mixlayer/mixlayer-docs",
  },
  chat: {
    link: "https://discord.gg/dWzh65e7tP",
  },
  banner: {
    key: "beta-access-1",
    text: "⚠️ Mixlayer is currently in open beta. Please excuse us if you encounter any issues while we get things ready.",
  },
  docsRepositoryBase: "https://github.com/mixlayer/mixlayer-docs/blob/main",
  footer: {
    text: "Mixlayer Labs, Inc © 2025",
  },
  useNextSeoProps() {
    return {
      description: "Mixlayer: Custom AI using simple JS",
      titleTemplate: "%s | Mixlayer Documentation",
    };
  },
};

export default config;
