$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".mv").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".photo1").addClass("headerColorScroll");
    } else {
      $(".photo1").removeClass("headerColorScroll");
    }
  });
});
