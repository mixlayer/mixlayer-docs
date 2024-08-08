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
  banner: {
    key: "beta-access-1",
    text: "⚠️ Mixlayer is currently in open beta. Please excuse us if you encounter any issues while we get things ready.",
  },
  docsRepositoryBase: "https://github.com/mixlayer/mixlayer-docs",
  footer: {
    text: "",
  },
};

export default config;
