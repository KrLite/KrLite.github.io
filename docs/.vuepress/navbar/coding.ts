import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
  {
    text: "Coding",
    icon: "solar:code-circle-bold",
    prefix: "/notes/coding/",
    activeMatch: "^/notes/coding/",

    items: [
      {
        text: "Tips",
        icon: "bxs:note",
        link: "tips/",
        activeMatch: "^/notes/coding/tips/",
      },

      {
        text: "VuePress",
        icon: "bxl:vuejs",
        link: "vuepress/",
        activeMatch: "^/notes/coding/vuepress/",
      },

      {
        text: "Java",
        icon: "bxl:java",
        link: "java/",
        activeMatch: "^/notes/coding/java/",
      },
    ],
  },
]);
