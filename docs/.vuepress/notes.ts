import { definePlumeNotesConfig } from "vuepress-theme-plume";

export default definePlumeNotesConfig({
  dir: "notes",
  link: "/",
  notes: [
    {
      dir: "languages/vuepress",
      link: "/languages/vuepress/",
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
