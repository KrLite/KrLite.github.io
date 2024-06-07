import { defineNavbarConfig } from "vuepress-theme-plume";
import coding from "./navbar/coding";
import learning from "./navbar/learning";

export default defineNavbarConfig([
  ...coding,
  //...learning,
  {
    text: "涂鸦",
    icon: "mdi:art",
    link: "/notes/doddles/",
    activeMatch: "^/notes/doddles/",
  },
  {
    text: "碎碎念",
    icon: "solar:document-bold",
    link: "/blog/",
    activeMatch: "^/blog/",
  },
  { text: "朋友们", icon: "solar:compass-bold", link: "/friends/" },
]);
