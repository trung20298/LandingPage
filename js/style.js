(function ($) {
  /**
   * Carousel social footer
   */
  function carousel_init() {
    $(".owl-carousel").each(function () {
      var slider = $(this);
      var defaults = {
        // direction: $('body').hasClass('rtl') ? 'rtl' : 'ltr'
      };
      var config = $.extend({}, defaults, slider.data("plugin-options"));
      // Initialize Slider
      slider.owlCarousel(config).addClass("owl-carousel-init");
    });
  }

  /*** RUN ALL FUNCTION */
  /*doc ready*/
  $(document).ready(function () {
    carousel_init();
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 60) {
      $("#header-nav").addClass("isSticky");
    } else if ($(window).scrollTop() < 60) {
      $("#header-nav").removeClass("isSticky");
    }
  });
})(jQuery);
