$(document).ready(function () {
  $(".main-page-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    lazyLoad: true,
  });

  $(".partners__slider").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    margin: 16,
    dots: false,
    lazyLoad: true,
    responsive: {
      1366: {
        items: 5,
        margin: 60,
      },
      900: {
        items: 4,
        margin: 48,
      },
      650: {
        items: 3,
        margin: 32,
      },
    },
  });
});
