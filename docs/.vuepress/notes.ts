import { definePlumeNotesConfig } from "vuepress-theme-plume";

export default definePlumeNotesConfig({
  dir: "notes",
  link: "/notes/",
  notes: [
    {
      dir: "coding/vuepress",
      link: "/coding/vuepress/",
      sidebar: [
		    "readme",
        {
          text: "Deploying",
          dir: "deploying",
          link: "/deploying/",
          collapsed: false,
          items: [
            "github_pages_integration"
          ],
        },
      ],
    },
  ],
});
