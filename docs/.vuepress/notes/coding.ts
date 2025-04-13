import { defineNoteConfig } from "vuepress-theme-plume";

export default [
  defineNoteConfig({
    dir: "coding/vuepress",
    link: "coding/vuepress/",
    sidebar: [
      "README",

      {
        text: "Deploying",
        icon: "none",
        collapsed: false,

        link: "deploying",
        prefix: "deploying",
        items: ["github_pages_integration"],
      },

      {
        text: "Asset Handling",
        icon: "none",
        collapsed: false,

        link: "asset_handling",
        prefix: "asset_handling",
        items: ["embedding_fonts"],
      },
    ],
  }),

  defineNoteConfig({
    dir: "coding/java",
    link: "/coding/java/",
    sidebar: [
      "README",

      {
        text: "Class",
        icon: "none",
        collapsed: false,

        dir: "class",
        items: ["annotation"],
      },

      {
        text: "Syntax",
        icon: "none",
        collapsed: false,

        dir: "syntax",
        items: ["lambda", "stream"],
      },

      {
        text: "Program Designing",
        icon: "none",
        collapsed: false,

        dir: "program_designing",
        items: [],
      },
    ],
  }),
];
