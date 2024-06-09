import jQuery from "jquery";

export default function (...elements: string[]) {
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

          console.log("Extending link for", wrapper, link);

          wrapper.on("click", function (event) {
            event.preventDefault();
            window.open(link.attr("href"), link.attr("target") ?? "_self");
          });
          wrapper.css("cursor", "pointer");
        });
    }
  });
}
