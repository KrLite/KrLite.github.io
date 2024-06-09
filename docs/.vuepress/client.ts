import "./styles/index.scss";

import { defineClientConfig } from "vuepress/client";
import Classic from "./components/Classic.vue";
import filterTags from "./public/scripts/mixins/filter_tags";
import overrideBackToTopButton from "./public/scripts/mixins/override_back_to_top_button";
import overrideEditButton from "./public/scripts/mixins/override_edit_button";
import extendLinks from "./public/scripts/mixins/extend_links";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    // Global components
    app.component("Classic", Classic);
    app.mixin({
      mounted() {
        const path = router.currentRoute.value.path;

        if (path.endsWith("/blog/tags/")) {
          // Filter tag elements on tag page load
          filterTags();
        }

        if (path.endsWith("/blog/")) {
          // Extend post card links
          extendLinks("div.post-item");
        }

        if (path.endsWith("/friends/")) {
          // Override edit button text
          overrideEditButton("申请友链");

          // Extend friend card links
          extendLinks("div.friend");
        }

        // Override back to top button
        overrideBackToTopButton();
      },
    });
  },
});
