import { defineNoteConfig } from "vuepress-theme-plume";

export default [
  defineNoteConfig({
    dir: "coding/tips",
    link: "coding/tips/",
    sidebar: "auto",
  }),

  defineNoteConfig({
    dir: "coding/vuepress",
    link: "coding/vuepress/",
    sidebar: "auto",
  }),

  defineNoteConfig({
    dir: "coding/java",
    link: "/coding/java/",
    sidebar: "auto",
  }),
];
