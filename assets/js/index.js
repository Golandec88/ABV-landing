$(document).ready(function () {
  $(".main-page-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
  });
  $(".partners__slider").owlCarousel({
    items: 5,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    margin: 60,
    dots: false,
  });
});
