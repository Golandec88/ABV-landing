$(document).ready(function () {
  $(".main-page-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
  });

  $(".partners__slider").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    margin: 16,
    dots: false,
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
    $(".overlay").toggleClass("active");

    $(".header__burger-cheeckbox").is(":checked")
      ? $(".header__burger-cheeckbox").val()
      : $(".header__burger-cheeckbox").val("on");
  });

  $(".overlay").on("click", function () {
    $(".header__burger")[0].click();
  });

  $(window).scroll(function () {
    $(this).scrollTop() > $(".main-page-slider").outerHeight()
      ? $(".header").addClass("white-theme")
      : $(".header").removeClass("white-theme");
  });
});
