import jQuery from "jquery";

export function overrideBackToTopButton() {
  jQuery(function ($) {
    const backToTopButton = $("button.back-to-top-button");
    const text = $(backToTopButton).children(".percent");
    const icon = $(backToTopButton).children(".icon");

    let lastScrollTime: number;
    let showBackToTopButtonIntervalID: NodeJS.Timeout;
    let showIconIntervalID: NodeJS.Timeout;

    backToTopButton.hide();
    text.show();
    icon.show();

    text.removeClass("show");
    icon.removeClass("show");

    $(document.body).scroll(function () {
      const scrollTop = document.body.scrollTop;
      const scrollableHeight = document.body.scrollHeight - window.innerHeight;
      const percent =
        100 * Math.min(1, Math.max(0, scrollTop / scrollableHeight));

      // Update last scroll time
      lastScrollTime = Date.now();

      // Show the button when the scroll position is greater than 128px, otherwise hide it after 0.9 second
      if (scrollTop > 128) {
        backToTopButton.fadeIn(200);
        clearTimeout(showBackToTopButtonIntervalID);
      } else {
        clearTimeout(showBackToTopButtonIntervalID);
        showBackToTopButtonIntervalID = setTimeout(function () {
          backToTopButton.fadeOut(200);
        }, 900);
      }

      // Show percentage text when last scroll happened within 1 second, otherwise show icon
      text.addClass("show");
      icon.removeClass("show");

      clearTimeout(showIconIntervalID);
      showIconIntervalID = setTimeout(function () {
        text.removeClass("show");
        icon.addClass("show");
      }, 1000);
    });
  });
}
