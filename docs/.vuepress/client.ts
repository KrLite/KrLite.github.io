import "./styles/index.scss";

import { defineClientConfig } from "vuepress/client";
import Classic from "./components/Classic.vue";
import filterTags from "./public/scripts/mixins/filter_tags";
import overrideBackToTopButton from "./public/scripts/mixins/override_back_to_top_button";
import overrideEditButton from "./public/scripts/mixins/override_edit_button";
import extendLinks from "./public/scripts/mixins/extend_links";
import reduceTagCount from "./public/scripts/mixins/reduce_tag_count";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    // Global components
    app.component("Classic", Classic);
    app.mixin({
      mounted() {
        const path = router.currentRoute.value.path;
        const blogPaths = ["/blog/", "/blog/tags/", "/blog/archives/"];

        if (blogPaths.includes(path)) {
          // Manually reduce tag count by 1
          reduceTagCount();
        }

        if (path === "/blog/") {
          // Extend post item links
          extendLinks(router, "div.vp-blog-post-item");
        } else if (blogPaths.includes(path)) {
          // Extend post list links
          extendLinks(router, ".vp-blog-short-post-list > li", "a.post-link", true);
        }

        if (path === "/blog/tags/") {
          // Filter tag elements in tags page
          filterTags();
        }

        if (path === "/friends/") {
          // Override edit button text
          overrideEditButton("申请友链");

          // Extend friend card links
          extendLinks(router, "div.vp-friend", "a.avatar-link", true);
        }

        // Override back to top button
        overrideBackToTopButton();
      },
    });
  },
});
