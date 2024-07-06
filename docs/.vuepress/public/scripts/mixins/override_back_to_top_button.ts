import jQuery from "jquery";
import { wrapNaN } from "../helper";

export default function () {
  jQuery(function ($) {
    $("button.vp-back-to-top")
      .filter(function () {
        return !$(this).data("overridden");
      })
      .each(function () {
        const button = $(this);
        const text = button.find(".percent");
        button.data("overridden", true);

        console.log("Overriding back to top button");

        function update() {
          const scrollTop = window.scrollY;
          const scrollableHeight =
            document.body.scrollHeight - window.innerHeight;
          const percent = Math.min(
            1,
            Math.max(0, scrollTop / scrollableHeight)
          );

          button.css("--percent", wrapNaN(percent));
          text.text(`${wrapNaN(Math.round(percent * 100))}%`);

          if (percent > 0.99) {
            button.addClass("reached-bottom");
          } else {
            button.removeClass("reached-bottom");
          }
        }

        button.children().remove("svg");
        const svg = button
          .append(
            `
            <svg aria-hidden='true'>
              <circle cx='50%' cy='50%'></circle>
            </svg>
            `
          )
          .children("svg:last-child");
        const circle = svg.children("circle:last-child");

        $(window).on("scroll", update);
      });
  });
}
