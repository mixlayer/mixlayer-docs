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
    content: <span>Mixlayer Labs Inc &copy; 2025</span>,
  },
};

export default config;
