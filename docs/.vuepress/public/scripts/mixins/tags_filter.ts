import jQuery from "jquery";

export function filterTagElements() {
  jQuery(function ($) {
    const tagsNav = $("div.tags-nav");
    if (!tagsNav.data("data-filtered")) {
      tagsNav.data("data-filtered", true);
      console.log("Filtering tags");

      $(".tag-name")
        .filter(function () {
          return $(this).text() == "null";
        })
        .parent()
        .hide();
    }
  });
}
