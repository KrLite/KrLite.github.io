import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { baseUrl } from "./helper";
import { theme } from "./theme";

export default defineUserConfig({
  base: baseUrl,

  lang: "zh-CN",
  title: "Press",
  description: "Once a fantacy unconjectured",

  theme: theme,

  bundler: viteBundler(),
});
