import jQuery from "jquery";

export default function () {
  jQuery(function ($) {
    $("div.tags-nav")
      .filter(function () {
        return !$(this).data("filtered");
      })
      .each(function () {
        const tagsNav = $(this);
        tagsNav.data("filtered", true);

        console.log("Filtering tags");

        tagsNav
          .find(".tag-name")
          .filter(function () {
            return $(this).text() == "null";
          })
          .parent()
          .hide();
      });
  });
}
