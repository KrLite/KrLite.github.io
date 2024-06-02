import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
  { text: "cd ~", link: "/", icon: "solar:home-2-bold" },
  { text: "所有文章", link: "/blog/", icon: "solar:document-text-bold" },
  { text: "友链", link: "/friends/", icon: "solar:compass-bold" },
]);
