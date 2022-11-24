$(document).ready(function () {
  // SUBSERVICES SLIDER
  const subservices__slider = $(".subservices__slider");
  subservices__slider.owlCarousel({
    center: true,
    loop: true,
    dots: false,
    items: 1,
    autoHeight: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
        margin: 30,
      },
      1200: {
        items: 1,
        margin: 60,
        stagePadding: 150,
      },
      1500: {
        items: 2,
        margin: 60,
      },
    },
    onDragged(e) {
      $(e.target).find(".deatailed-btn").off("click");
      $(e.target).find(".buttons__item").off("click");
      $(e.target)
        .find(".deatailed-btn")
        .on("click", function (e) {
          e.stopPropagation();
          const wrapper = this.closest(".subservices__slider_item");
          $(this).hasClass("back") ? showDesc(wrapper) : showDetails(wrapper);
        });
      $(e.target)
        .find(".buttons__item.detailed")
        .on("click", function (e) {
          e.stopPropagation();
          const wrapper = this.closest(".subservices__slider_item");
          $(this).hasClass("active") ? showDesc(wrapper) : showDetails(wrapper);
        });
      $(e.target)
        .find(".buttons__item.desc")
        .on("click", function (e) {
          e.stopPropagation();
          const wrapper = this.closest(".subservices__slider_item");
          $(this).hasClass("active") ? showDetails(wrapper) : showDesc(wrapper);
        });
    },
  });

  $(".deatailed-btn").on("click", function (e) {
    e.stopPropagation();
    const wrapper =
      this.closest(".subservices__slider_item") ||
      this.closest(".subservices__mobile_item");
    $(this).hasClass("back") ? showDesc(wrapper) : showDetails(wrapper);
  });
  $(".buttons__item.detailed").on("click", function (e) {
    e.stopPropagation();
    const wrapper =
      this.closest(".subservices__slider_item") ||
      this.closest(".subservices__mobile_item");
    $(this).hasClass("active") ? showDesc(wrapper) : showDetails(wrapper);
  });
  $(".buttons__item.desc").on("click", function (e) {
    e.stopPropagation();
    const wrapper =
      this.closest(".subservices__slider_item") ||
      this.closest(".subservices__mobile_item");
    $(this).hasClass("active") ? showDetails(wrapper) : showDesc(wrapper);
  });

  $(".slider__nav_item.left").on("click", function () {
    subservices__slider.trigger("prev.owl.carousel", [800]);
  });
  $(".slider__nav_item.right").on("click", function () {
    subservices__slider.trigger("next.owl.carousel", [800]);
  });
  // SUBSERVICES SLIDER END

  // edoBenefits SLIDER
  const edoBenefits = $(".edo-benefits__right_slider");
  edoBenefits.owlCarousel({
    loop: true,
    items: 1,
    autoHeight: false,
    margin: 50,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    autoplaySpeed: 800,
    dotsContainer: "#edo-benefits__left_nav",
    dotsSpeed: 800,
    onChanged() {
      const itemNumber = $(".edo-benefits__left_nav")
        .find(".edo-benefits__left_nav_item.active")
        .attr("data");
      $(".edo-benefits__left_item").removeClass("active");
      $(`.edo-benefits__left_item.item-${itemNumber}`).addClass("active");
      $(".edo-benefits__mobile-text_item").removeClass("active");
      $(`.edo-benefits__mobile-text_item.item-${itemNumber}`).addClass(
        "active"
      );
    },
  });

  $(".edo-benefits__left_nav_item").on("click", function () {
    const itemNumber = $(this).attr("data");
    $(".edo-benefits__left_item").removeClass("active");
    $(`.edo-benefits__left_item.item-${itemNumber}`).addClass("active");
    $(".edo-benefits__mobile-text_item").removeClass("active");
    $(`.edo-benefits__mobile-text_item.item-${itemNumber}`).addClass("active");
  });
  // edoBenefits SLIDER END

  // SOLUTIONS SLIDER
  const solutionsSlider = $(".solutions__slider");
  solutionsSlider.owlCarousel({
    loop: true,
    dots: true,
    lazyLoad: true,
    items: 1,
    autoHeight: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    autoplaySpeed: 800,
    dotsContainer: "#solutions__nav",
    dotsSpeed: 800,
  });
  // SOLUTIONS SLIDER END

  // SERVICES SLIDER
  const servicesSlider = $(".services__slider");
  servicesSlider.owlCarousel({
    loop: true,
    dots: false,
    items: 1,
    autoHeight: false,
    lazyLoad: true,
    margin: 50,
    onDragged(e) {
      const itemNumber = $(e.target)
        .find(".owl-item.active .services__slider_item")
        .attr("data");
      $(".services__nav_item, .services__text_item").removeClass("active");
      $(
        `.services__nav_item.item-${itemNumber}, .services__text_item.item-${itemNumber}`
      ).addClass("active");
      $(".services__text_desc").addClass("active");
      $(".services__text_detailed").removeClass("active");
      $(".services__dots-nav_item").removeClass("active");
      $(".services__dots-nav_item.desc").addClass("active");
    },
  });

  $(".services__nav_item").on("click", function () {
    const itemNumber = $(this).attr("data");
    servicesSlider.trigger("to.owl.carousel", [itemNumber - 1 || 0, 800]);
    $(".services__nav_item, .services__text_item").removeClass("active");
    $(this).addClass("active");
    $(`.services__text_item.item-${itemNumber}`).addClass("active");
    $(".services__dots-nav_item").removeClass("active");
    $(".services__dots-nav_item.desc").addClass("active");
  });

  $(".services__text_btn").on("click", function () {
    const wrapper = $(this).closest(".services__text_item");
    $(wrapper).find(".services__text_desc").toggleClass("active");
    $(wrapper).find(".services__text_detailed").toggleClass("active");
    $(".services__dots-nav_item").toggleClass("active");
  });
  $(".services__dots-nav_item").on("click", function () {
    $(".services__dots-nav_item").toggleClass("active");
    $(".services__text_item.active")
      .find(".services__text_desc")
      .toggleClass("active");
    $(".services__text_item.active")
      .find(".services__text_detailed")
      .toggleClass("active");
  });
  // SERVICES SLIDER END

  // SMOOTH SCROLL
  SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 800,
    // Размер шага в пикселях
    stepSize: 75,

    // Дополнительные настройки:

    // Ускорение
    accelerationDelta: 30,
    // Максимальное ускорение
    accelerationMax: 2,

    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Поддержка тачпада
    touchpadSupport: true,
  });
});

function showDetails(wrapper) {
  $(wrapper).find(".buttons__item.detailed").addClass("active");
  $(wrapper).find(".buttons__item.desc").removeClass("active");
  $(wrapper).find(".text__detailed").removeClass("hide");
  $(wrapper).find(".text__detailed").addClass("active");
  $(wrapper).find(".text__desc").removeClass("active");
  $(wrapper).find(".text__desc").addClass("hide");
}
function showDesc(wrapper) {
  $(wrapper).find(".buttons__item.detailed").removeClass("active");
  $(wrapper).find(".buttons__item.desc").addClass("active");
  $(wrapper).find(".text__detailed").addClass("hide");

  $(wrapper).find(".text__detailed").removeClass("active");
  $(wrapper).find(".text__desc").addClass("active");
  $(wrapper).find(".text__desc").removeClass("hide");
}
