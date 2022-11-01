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

  // $(".header__lang-mobile_selected").on("click", function () {
  //   $(".lang-mobile__menu").toggleClass("active");
  // });

  // $(".header__lang-mobile_btn").on("click", function () {
  //   $(".header__lang-mobile_btn").removeClass("active");
  //   $(this).addClass("active");
  //   $(".lang-mobile__menu").toggleClass("active");
  //   $(".header__lang-mobile_selected").html($(this).text());
  // });

  // $(".header__burger").on("click", function () {
  //   $(".header__burger").toggleClass("active");
  //   $(".header__menu").toggleClass("active");
  //   $(".overlay").toggleClass("active");
  //   $("body").toggleClass("fixed");
  // });

  // $(".overlay").on("click", function () {
  //   $(".header__burger")[0].click();
  // });

  function showYaMaps() {
    var map = `<iframe
    class="footer__iframe"
    src="https://yandex.uz/map-widget/v1/-/CCU5aSReTC"
    frameborder="1"
    allowfullscreen="true"
    title="yandex map"
    style="position: relative"></iframe>`;

    $(".footer__map").append(map);
  }

  showYaMaps();
  // delete after complete

  let YaMapsShown = false;

  // $(window).scroll(function () {
  //   if (!YaMapsShown) {
  //     if (
  //       $(window).scrollTop() + $(window).height() >
  //       $(document).height() - $(".footer").height() - 300
  //     ) {
  //       showYaMaps();
  //       YaMapsShown = true;
  //     }
  //   }
  // });
});
