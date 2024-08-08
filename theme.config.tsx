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
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/mixlayer/mixlayer-docs",
  footer: {
    text: "",
  },
};

export default config;
