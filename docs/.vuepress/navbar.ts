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
    ],
  },
  { text: "碎碎念", icon: "solar:document-text-bold", link: "/blog/" },
  { text: "朋友们", icon: "solar:compass-bold", link: "/friends/" },
]);
