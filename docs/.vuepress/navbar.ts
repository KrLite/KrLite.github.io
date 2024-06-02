import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
  { text: "cd ~", link: "/", icon: "solar:home-2-bold" },
  { text: "笔记", icon: "solar:bookmark-bold", items: [
    { text: "Languages", items: [
      { text: "VuePress", link: "/notes/languages/vuepress/" },
    ] },
  ] },
  { text: "碎碎念", link: "/blog/", icon: "solar:document-text-bold" },
  { text: "友链", link: "/friends/", icon: "solar:compass-bold" },
]);
