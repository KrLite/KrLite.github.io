import "./styles/index.scss";

import { defineClientConfig } from "vuepress/client";
import Classic from "./components/Classic.vue";
import filterTags from "./public/scripts/mixins/filter_tags";
import overrideBackToTopButton from "./public/scripts/mixins/override_back_to_top_button";
import overrideEditButton from "./public/scripts/mixins/override_edit_button";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    // Global components
    app.component("Classic", Classic);
    app.mixin({
      mounted() {
        const path = router.currentRoute.value.path;

        // Filter tag elements on tag page load
        if (path.endsWith("/blog/tags/")) {
          filterTags();
        }

        if (path.endsWith("/friends/")) {
          // Override edit button text
          overrideEditButton("申请友链");
        }

        // Override back to top button
        overrideBackToTopButton();
      },
    });
  },
});
