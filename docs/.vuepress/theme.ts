import plumeTheme from "vuepress-theme-plume";
import { Theme } from "vuepress/core";
import navbar from "./navbar";
import notes from "./notes";

export const theme: Theme = plumeTheme({
  avatar: {
    url: "https://github.com/KrLite.png",
    name: "KrLite",
    description: "坚守此岸。",
    circle: true,
  },

  plugins: {
    shiki: { twoslash: true },

    markdownEnhance: {
      demo: true,
      include: true,
      chart: true,
      echarts: true,
      mermaid: true,
      flowchart: true,
    },
    markdownPower: {
      pdf: true,
      caniuse: true,
      plot: true,
      bilibili: true,
      youtube: true,
      icons: true,
      codepen: true,
      replit: true,
      codeSandbox: true,
      jsfiddle: true,
      repl: {
        go: true,
        rust: true,
        kotlin: true,
      },
    },

    comment: {
      provider: "Giscus",
      comment: true,
      repo: "KrLite/Press",
      repoId: "R_kgDOMDumMA",
      category: "Announcements",
      categoryId: "DIC_kwDOMDumMM4Cfys_",
    },
  },

  social: [
    { icon: "bilibili", link: "https://space.bilibili.com/399487383" },
    { icon: "github", link: "https://github.com/KrLite" },
  ],
  navbarSocialInclude: ["github", "bilibili"],

  footer: { message: "坚守此岸", copyright: "©2024→未来　KrLite" },

  notes: notes,
  navbar: navbar,
  hostname: "https://krlite.github.io/Press/", // SEO
});
