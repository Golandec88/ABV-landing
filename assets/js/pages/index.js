$(document).ready(function () {
  $(".subservices__slider").owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 60,
    dots: false,
    autoHeight: true,
  });

  $(".deatailed-btn").on("click", function () {
    const wrapper = this.closest(".item__text_wrapper");
    $(wrapper).children(".text__desc").toggle();
    $(wrapper).children(".text__detailed").toggle();
    $(".buttons__item.detailed").toggleClass("active");
    $(".buttons__item.desc").toggleClass("active");
  });
  $(".buttons__item.detailed").on("click", function () {
    const wrapper = this.closest(".subservices__slider_item");
    $(".buttons__item").toggleClass("active");
    $(wrapper).find(".text__detailed").show();
    $(wrapper).find(".text__desc").hide();
  });
  $(".buttons__item.desc").on("click", function () {
    const wrapper = this.closest(".subservices__slider_item");
    $(".buttons__item").toggleClass("active");
    $(wrapper).find(".text__desc").show();
    $(wrapper).find(".text__detailed").hide();
  });
});
