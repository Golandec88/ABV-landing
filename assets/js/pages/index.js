$(document).ready(function () {
  const subservices__slider = $(".subservices__slider");
  subservices__slider.owlCarousel({
    center: true,
    loop: true,
    dots: false,
    items: 1,
    autoHeight: true,
    responsive: {
      0: {
        items: 1,
        margin: 30,
      },
      1150: {
        items: 1,
        margin: 30,
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
    subservices__slider.trigger("prev.owl.carousel", [300]);
  });
  $(".slider__nav_item.right").on("click", function () {
    subservices__slider.trigger("next.owl.carousel", [300]);
  });
});

function showDetails(wrapper) {
  $(wrapper).find(".buttons__item.detailed").addClass("active");
  $(wrapper).find(".buttons__item.desc").removeClass("active");
  $(wrapper).find(".text__detailed").removeClass("hide");
  $(wrapper).find(".text__detailed").addClass("active");
  $(wrapper).find(".text__desc").removeClass("active");
  $(wrapper).find(".text__desc").addClass("hide");
  $(".owl-carousel").trigger("refresh.owl.carousel");
}
function showDesc(wrapper) {
  $(wrapper).find(".buttons__item.detailed").removeClass("active");
  $(wrapper).find(".buttons__item.desc").addClass("active");
  $(wrapper).find(".text__detailed").addClass("hide");
  $(wrapper).find(".text__detailed").removeClass("active");
  $(wrapper).find(".text__desc").addClass("active");
  $(wrapper).find(".text__desc").removeClass("hide");
  $(".owl-carousel").trigger("refresh.owl.carousel");
}
