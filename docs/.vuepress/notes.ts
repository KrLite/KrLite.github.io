import { defineNotesConfig } from "vuepress-theme-plume";
import coding from "./notes/coding";

export default defineNotesConfig({
  dir: "notes",
  link: "/notes/",
  notes: [
    {
      dir: "doddles",
      link: "doddles/",
      sidebar: "auto",
    },
    ...coding,
  ],
});
