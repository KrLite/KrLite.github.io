import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
  {
    text: "Coding",
    icon: "solar:code-circle-bold",
    activeMatch: "^/notes/coding/",

    items: [
      {
        text: "VuePress",
        icon: "bxl:vuejs",
        link: "/notes/coding/vuepress/",
        activeMatch: "^/notes/coding/vuepress/",
      },

      {
        text: "Java",
        icon: "bxl:java",
        link: "/notes/coding/java/",
        activeMatch: "^/notes/coding/java/",
      },
    ],
  },
]);
