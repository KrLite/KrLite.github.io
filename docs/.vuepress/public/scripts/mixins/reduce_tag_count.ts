import jQuery from "jquery";

export default function () {
  jQuery(function ($) {
    $(".blog-nav a[href='/blog/tags/']")
      .filter(function () {
        return !$(this).data("reduced");
      })
      .each(function () {
        const link = $(this);
        const count = link.find(".total");
        link.data("reduced", true);

        console.log("Reducing tag count");

        count.text(parseInt(count.text()) - 1);
      });
  });
}
