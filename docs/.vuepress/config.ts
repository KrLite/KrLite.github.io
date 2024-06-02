import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { baseUrl } from "./helper";
import { theme } from "./theme";

export default defineUserConfig({
  base: baseUrl,

  lang: "zh-CN",
  title: "一些可有可无的故事",
  description: "Once a fantacy unconjectured",

  theme: theme,

  bundler: viteBundler(),
});
