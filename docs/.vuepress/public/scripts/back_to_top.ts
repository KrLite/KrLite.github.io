import jQuery from "jquery";

export function overrideBackToTopButton() {
  jQuery(function ($) {
    const button = $("button.back-to-top-button");
    if (!button.data("initialized")) {
      button.data("initialized", true);
      console.log("Initializing back to top button");

      //button.children().remove();
      const svg = button
        .append("<svg aria-hidden='true'></svg>")
        .children("svg");
      const circle = svg
        .append("<circle></circle>")
        .children("circle");

      $(document.body).scroll(function () {
        const scrollTop = document.body.scrollTop;
        const scrollableHeight =
          document.body.scrollHeight - window.innerHeight;
        const percent = Math.min(1, Math.max(0, scrollTop / scrollableHeight));
      });
    }
  });
}
