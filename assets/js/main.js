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

  $(".header-mobile__link, .header-mobile .header__logo").on(
    "click",
    function () {
      $(".header__burger")[0].click();
    }
  );

  $(".header-mobile__langs_item, .header__lang_btn").on("click", function () {
    $(".header-mobile__langs_item, .header__lang_btn").removeClass("active");
    $(this).addClass("active");
  });

  $(".header__burger").on("click", function () {
    $(".header__burger, .header-mobile, .overlay").toggleClass("active");
    $("body").toggleClass("fixed");
  });

  $(".overlay, .header-mobile__top_x-btn").on("click", function () {
    $(".header__burger")[0].click();
  });

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

  // delete after complete

  let YaMapsShown = false;

  $(window).scroll(function () {
    if (!YaMapsShown) {
      if (
        $(window).scrollTop() + $(window).height() >
        $(document).height() - $(".footer").height() - 600
      ) {
        showYaMaps();
        YaMapsShown = true;
      }
    }
  });
});
