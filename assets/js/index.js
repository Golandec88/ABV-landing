$(document).ready(function () {
  $(".main-page-slider").owlCarousel({
    items: 1,
    loop: true,
    // autoplay: true,
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

  $(".header__lang-mobile_selected").on("click", function () {
    $(".lang-mobile__menu").toggleClass("active");
  });

  $(".header__lang-mobile_btn").on("click", function () {
    $(".header__lang-mobile_btn").removeClass("active");
    $(this).addClass("active");
    $(".lang-mobile__menu").toggleClass("active");
    $(".header__lang-mobile_selected").html($(this).text());
  });

  $(".header__burger").on("click", function () {
    $(".header__burger").toggleClass("active");
    $(".header__menu").toggleClass("active");

    $(".header__burger-cheeckbox").is(":checked")
      ? $(".header__burger-cheeckbox").val()
      : $(".header__burger-cheeckbox").val("on");
  });
});
