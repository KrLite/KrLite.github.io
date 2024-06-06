import "./styles/index.scss";

import { defineClientConfig } from "vuepress/client";
import Classic from "./components/Classic.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    // Global components
    app.component("Classic", Classic);
  },
});
