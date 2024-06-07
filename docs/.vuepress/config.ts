import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { baseUrl } from "./public/scripts/helper";
import { theme } from "./theme";
import path from "path";

export default defineUserConfig({
  base: baseUrl,

  lang: "zh-CN",
  title: "一些可有可无的故事",
  description: "Once a fantacy unconjectured",

  theme: theme,

  pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],
  head: [],

  alias: {
    "@source": path.resolve(__dirname),
    "@components": path.resolve(__dirname, "./components"),
    "@scripts": path.resolve(__dirname, "./scripts"),
    "@styles": path.resolve(__dirname, "./styles"),
  },

  bundler: viteBundler(),
});
