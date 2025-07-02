import React from "react";
import MixlayerLogoMark from "./components/MixlayerLogoMark";

//@ts-ignore
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <div className="flex flex-row items-center justify-center gap-3">
      <div>
        <MixlayerLogoMark
          className="fill-black dark:fill-white"
          style={{
            width: "28px",
          }}
        />
      </div>
      <div className="text-white text-3xl font-bold">Mixlayer</div>
    </div>
  ),
  nextThemes: {
    defaultTheme: "dark",
  },
  project: {
    link: "https://github.com/mixlayer",
  },
  chat: {
    link: "https://discord.gg/dWzh65e7tP",
  },
  head() {
    const { frontMatter } = useConfig();

    console.log(frontMatter);
    return (
      <>
        <title>{`${frontMatter.title} - Mixlayer Docs`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content={`${frontMatter.title} - Mixlayer Docs`}
        />
        <meta
          property="og:description"
          content={`${frontMatter.description}`}
        />
      </>
    );
  },
  docsRepositoryBase: "https://github.com/mixlayer/mixlayer-docs/blob/main",
  footer: {
    content: <span>Mixlayer Labs Inc &copy; 2025</span>,
  },
};

export default config;
