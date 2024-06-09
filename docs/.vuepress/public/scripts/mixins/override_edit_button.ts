import jQuery from "jquery";

export default function (name: string) {
  jQuery(function ($) {
    $(".edit-link-button")
      .filter(function () {
        return !$(this).data("overridden");
      })
      .each(function () {
        const button = $(this);
        button.data("overridden", true);

        console.log("Overriding edit button");

        // Preserve children
        const children = button.children();
        button.empty();
        button.append(children);

        button.append(`<span>${name}</span>`);
      });
  });
}
