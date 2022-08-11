$(document).ready(function () {
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

  if (!!$(".main-page-slider").length) {
    $(window).scroll(function () {
      $(this).scrollTop() > $(".main-page-slider").outerHeight()
        ? $(".header").addClass("white-theme")
        : $(".header").removeClass("white-theme");

      const top_of_element = $(".footer").offset().top;
      const bottom_of_screen = $(window).scrollTop() + $(this).innerHeight();
      bottom_of_screen > top_of_element
        ? $(".header").addClass("hide")
        : $(".header").removeClass("hide");
    });
  } else {
    $(".header").addClass("white-theme");
  }
  let YaMapsShown = false;
  $(window).scroll(function () {
    if (!YaMapsShown) {
      if (
        $(window).scrollTop() + $(window).height() >
        $(document).height() - 700
      ) {
        showYaMaps();
        YaMapsShown = true;
      }
    }
  });
  function showYaMaps() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://yandex.uz/map-widget/v1/-/CCU5aSReTC";
    document.getElementsByClassName("footer__map")[0].appendChild(script);
  }
});
