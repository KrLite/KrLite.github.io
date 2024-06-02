import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { plumeTheme } from "vuepress-theme-plume";
import { baseUrl } from "./helper";
import navbar from "./navbar";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Press",
  description: "Once a fantacy unconjectured",
  base: baseUrl,

  theme: plumeTheme({
    avatar: {
      url: "https://github.com/KrLite.png",
      name: "KrLite",
      description: "坚守此岸。",
      circle: true,
    },
    plugins: {
      comment: {
        provider: "Giscus",
        comment: true,
        repo: "KrLite/Press",
        repoId: "R_kgDOMDumMA",
        category: "Announcements",
        categoryId: "DIC_kwDOMDumMM4Cfys_",
      },
    },
    navbar: navbar,
    hostname: "https://krlite.github.io/Press/", // SEO
  }),

  bundler: viteBundler(),
});
