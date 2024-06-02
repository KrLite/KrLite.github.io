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
		      icon: "solar:download-square-bold",
          items: [
			      "github_pages_integration",
          ],
        },
      ],
    },
  ],
});
