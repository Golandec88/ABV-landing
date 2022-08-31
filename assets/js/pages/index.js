$(document).ready(function () {
  $(".main-page-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    lazyLoad: true,
  });

  $(".partners__slider").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    margin: 16,
    dots: false,
    lazyLoad: true,
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

  fetch("https://test.e365.uz/edo-service/api/Utils/CBRates")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const courseList = data.map(
        (item) => `<p>
        <b>${item.Ccy}:</b> ${item.Rate}
        <span class="${item.Diff > 0 ? "upper" : "lower"}">${
          item.Diff > 0 ? "&#8593" : "&#8595"
        }  ${item.Diff}</span>
      </p>`
      );
      $(".bank-cources__wrapper").append(courseList);
    });
});
