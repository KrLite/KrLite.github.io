import jQuery from "jquery";

export default function (name: string) {
  jQuery(function ($) {
    const button = $(".edit-link-button");

    if (!button.data("overridden")) {
      button.data("overridden", true);

      // Preserve children
      const children = button.children();
      button.empty();
      button.append(children);

      button.append(`<span>${name}</span>`);
    }
  });
}
