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

  // $(window).on("scroll", function () {
  //   $(".scrollbar__thumb").css({
  //     transform: `translateY(
  //       ${
  //         $(".scrollbar").height() / ($("html").height() / window.pageYOffset) +
  //         ($(".scrollbar").height() /
  //           ($("body").height() / $(".scrollbar").height()) -
  //           60) /
  //           ($("html").height() / window.pageYOffset)
  //       }px
  //     )`,
  //   });
  // });

  // $(".scrollbar__thumb").mousedown(function (e) {
  //   console.log(e);
  //   $(".scrollbar__thumb").css({
  //     transform: `translateY(
  //       ${
  //         $(".scrollbar").height() / ($("html").height() / e.clientY) +
  //         ($(".scrollbar").height() /
  //           ($("body").height() / $(".scrollbar").height()) -
  //           60) /
  //           ($("html").height() / e.clientY)
  //       }px
  //     )`,
  //   });
  // });

  const track = this.getElementsByClassName("scrollbar")[0];
  const thumb = this.getElementsByClassName("scrollbar__thumb")[0];

  this.addEventListener("scroll", documentScrollHandler);
  thumb.addEventListener("mousedown", mouseDownThumbHandler);

  function documentScrollHandler(e) {
    e.stopPropagation();

    $(".scrollbar__thumb").css({
      transform: `translateY(
        ${
          $(".scrollbar").height() / ($("html").height() / window.pageYOffset) +
          ($(".scrollbar").height() /
            ($("body").height() / $(".scrollbar").height()) -
            60) /
            ($("html").height() / window.pageYOffset)
        }px
      )`,
    });
  }

  let clickedPos = 0;
  function mouseDownThumbHandler(e) {
    e.stopPropagation();

    var rect = e.target.getBoundingClientRect();
    clickedPos = e.clientY - rect.top;

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);

    document.removeEventListener("scroll", documentScrollHandler);
  }

  function mouseMoveHandler(e) {
    e.stopPropagation();

    const max = $(".scrollbar").height() - 80;
    const thumbPos =
      e.clientY - clickedPos > max
        ? max
        : e.clientY - clickedPos >= 0
        ? e.clientY - clickedPos
        : 0;
    const windowHeight = window.innerHeight;
    const bodyHeight = this.body.offsetHeight;
    const position = thumbPos * (bodyHeight / windowHeight);

    thumb.style.transform = `translateY(${thumbPos}px)`;
    window.scrollTo(
      0,
      bodyHeight - windowHeight > position
        ? position
        : bodyHeight - windowHeight
    );
  }

  function mouseUpHandler() {
    document.addEventListener("scroll", documentScrollHandler);

    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  }
});
