import { definePlumeNotesConfig } from "vuepress-theme-plume";

export default definePlumeNotesConfig({
  dir: "notes",
  link: "/notes/",
  notes: [
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
          items: [
            "github_pages_integration"
          ],
        },
      ],
    },
  ],
});
