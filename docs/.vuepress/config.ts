import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { plumeTheme } from "vuepress-theme-plume";

const isDev = process.env.NODE_ENV === "development";

export default defineUserConfig({
  base: isDev? "/" : "/Press/",

  lang: "zh-CN",
  title: "Press",
  description: "Once a fantacy unconjectured",

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
    navbar: [
      { text: "友链", link: "/friends/", icon: "solar:compass-bold" }
    ],
    hostname: "https://krlite.github.io/Press/", // SEO
  }),

  bundler: viteBundler(),
});
