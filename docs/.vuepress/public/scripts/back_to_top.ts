import jQuery from "jquery";

export function overrideBackToTopButton() {
  jQuery(function ($) {
    const button = $("button.back-to-top-button");
    if (!button.data("initialized")) {
      button.data("initialized", true);
      console.log("Initializing back to top button");

      button.children().remove("svg");
      const svg = button
        .append("<svg aria-hidden='true'><circle cx='50%' cy='50%'></circle></svg>")
        .children("svg");
      const circle = svg.children("circle");

      $(window).scroll(function () {
        const scrollTop = window.scrollY;
        const scrollableHeight =
          document.body.scrollHeight - window.innerHeight;
        const percent = Math.min(1, Math.max(0, scrollTop / scrollableHeight));

        button.css("--percent", percent);

        if (percent > 0.99) {
          button.addClass("reached-bottom");
        } else {
          button.removeClass("reached-bottom");
        }
      });
    }
  });
}
