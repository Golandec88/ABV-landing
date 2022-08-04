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

  $(".circle-animation-btn").mousemove(function (e) {
    this.style.setProperty("--circle-width", this.offsetWidth + "px");
    this.style.setProperty(
      "--circle-top-position",
      e.offsetY - this.offsetWidth / 2 + "px"
    );
    this.style.setProperty(
      "--circle-left-position",
      e.offsetX - this.offsetWidth / 2 + "px"
    );
  });
});
