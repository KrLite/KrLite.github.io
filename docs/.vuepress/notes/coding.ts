import {
  NotesItemOptions,
} from "vuepress-theme-plume";

export default [
  {
    dir: "coding/vuepress",
    link: "/coding/vuepress/",
    sidebar: [
      "README",

      {
        text: "Deploying",
        icon: "none",
        collapsed: false,

        dir: "deploying",
        items: ["github_pages_integration"],
      },

      {
        text: "Asset Handling",
        icon: "none",
        collapsed: false,

        dir: "asset_handling",
        items: ["embedding_fonts"],
      },
    ],
  },

  {
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
  },
] satisfies NotesItemOptions[];
