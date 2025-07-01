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
  nextThemes: {
    defaultTheme: "dark",
  },
  project: {
    link: "https://github.com/mixlayer/mixlayer-docs",
  },
  chat: {
    link: "https://discord.gg/dWzh65e7tP",
  },
  docsRepositoryBase: "https://github.com/mixlayer/mixlayer-docs/blob/main",
  footer: {
    content: <span>Mixlayer Labs Inc © 2025</span>,
  },
  useNextSeoProps() {
    return {
      description: "Mixlayer: Limitless AI inference",
      titleTemplate: "%s | Mixlayer Documentation",
    };
  },
};

export default config;
