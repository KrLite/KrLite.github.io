import { definePlumeNotesConfig } from "vuepress-theme-plume";
import coding from "./notes/coding";
import learning from "./notes/learning";

export default definePlumeNotesConfig({
  dir: "notes",
  link: "/notes/",
  notes: [
    {
      dir: "doddles",
      link: "/doddles/",
      sidebar: "auto",
    },
    ...coding,
    //...learning,
  ],
});
