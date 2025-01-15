import plumeTheme from "vuepress-theme-plume";
import navbar from "./navbar";
import notes from "./notes";
import path from "path";

export const theme = plumeTheme({
  docsRepo: "KrLite/KrLite.github.io",
  docsDir: "docs",

  avatar: {
    url: "https://github.com/KrLite.png",
    name: "KrLite",
    description: "坚守此岸。",
    circle: true,
  },

  social: [
    { icon: "bilibili", link: "https://space.bilibili.com/399487383" },
    { icon: "github", link: "https://github.com/KrLite" },
  ],
  navbarSocialInclude: ["github", "bilibili"],

  footer: { message: "坚守此岸", copyright: "© 2024→未来　KrLite" },

  notFound: {
    title: "少女祈祷中",
    quote: "你正在寻找的页面也许去了幻想乡",
  },

  notes: notes,
  navbar: navbar,
  hostname: "https://krlite.github.io/", // SEO

  plugins: {
    shiki: { twoslash: true },

    markdownEnhance: {
      demo: true,
      include: {
        resolvePath: (file) => {
          if (file.startsWith("@src"))
            return file.replace("@src", path.resolve(__dirname, ".."));

          return file;
        },
      },
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
      repo: "KrLite/KrLite.github.io",
      repoId: "R_kgDOMDumMA",
      category: "Announcements",
      categoryId: "DIC_kwDOMDumMM4Cfys_",
    },
  },
});
