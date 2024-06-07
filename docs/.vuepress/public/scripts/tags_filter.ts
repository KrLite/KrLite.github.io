import jQuery from "jquery";

export function filterTagElements() {
  jQuery(function ($) {
    console.log("Filtering tag elements...");
    $(".tag-name")
      .filter(function () {
        return $(this).text() == "null";
      })
      .parent()
      .hide();
  });
}
