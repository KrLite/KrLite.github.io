import jQuery from "jquery";
import { Router } from "vuepress/client";

export default function (router: Router, ...elements: string[]) {
  jQuery(function ($) {
    for (const element of elements) {
      $(element)
        .has("a")
        .filter(function () {
          return !$(this).data("extended");
        })
        .each(function () {
          const wrapper = $(this);
          const link = wrapper.find("a");
          wrapper.data("extended", true);

          //console.log("Extending link for", wrapper, link);

          const href = link.attr("href");
          const isExternal = link.attr("target") === "_blank";
          const isValidRoute = href !== undefined;

          if (isExternal || isValidRoute) {
            wrapper.on("click", function (event) {
              event.preventDefault();
              if (isExternal) {
                window.open(link.attr("href"));
              } else {
                if (isValidRoute) {
                  router.push(router.resolve(href));
                } else {
                  console.log(`Link ${link} is not a valid route!`);
                }
              }
            });

            wrapper.css("cursor", "pointer");
          }
        });
    }
  });
}
