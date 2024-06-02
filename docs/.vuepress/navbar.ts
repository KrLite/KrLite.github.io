import { defineNavbarConfig } from "vuepress-theme-plume";
import { withBase } from "./helper";

export default defineNavbarConfig([
  { text: "友链", link: withBase("/friends/"), icon: "solar:compass-bold" },
]);
