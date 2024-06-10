import jQuery from "jquery";
import { Router } from "vuepress/client";

export default function (
  router: Router,
  element: string,
  a: string = "a",
  forceRelative: boolean = false
) {
  jQuery(function ($) {
    $(element)
      .has(a)
      .filter(function () {
        return !$(this).data("extended");
      })
      .each(function () {
        const wrapper = $(this);
        const link = wrapper.find(a)[0];
        wrapper.data("extended", true);

        //console.log("Extending link for", wrapper, link);

        const href = link.getAttribute("href");
        const isExternal = link.getAttribute("target") === "_blank";
        const isValid = href !== null;

        // Add a new link that overlays the wrapper
        const newLink = wrapper.append("<a></a>").find("a:last-child");

        newLink.attr("href", href);
        newLink.text("");

        newLink.css("position", "absolute");
        newLink.css("top", "0");
        newLink.css("left", "0");
        newLink.css("width", "100%");
        newLink.css("height", "100%");
        newLink.css("display", "inline");

        // Force the wrapper to be relative if needed
        if (forceRelative) {
          wrapper.css("position", "relative");
        }

        // Add a click event to the new link to resolve router links
        if (isValid) {
          newLink.on("click", function (event) {
            event.preventDefault();
            if (isExternal) {
              window.open(href);
            } else {
              router.push(router.resolve(href));
            }
          });
        } else {
          console.log(`${link} has no valid destination!`);
        }
      });
  });
}
