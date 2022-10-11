$(document).ready(function () {
  let itemsClass = ".items-ooo";

  $(window).scroll(function () {
    const windowCenter =
      $(this).scrollTop() +
      $(this).height() / 2 -
      $(`.working__items${itemsClass}`).offset().top;

    $(".line-2").height(windowCenter);

    document.querySelectorAll(".working__item-num").forEach((el) => {
      $(this).scrollTop() + $(this).height() / 2 >= $(el).offset().top
        ? el.classList.add("active")
        : el.classList.remove("active");
    });
  });

  $(".working__item-num.go-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  let countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua & Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia & Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central Arfrican Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cuba",
    "Curacao",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauro",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre & Miquelon",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "St Kitts & Nevis",
    "St Lucia",
    "St Vincent",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks & Caicos",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  $(".send-request__right_select .options").html(
    countries.map((el) => `<p class="options__item">${el}</p>`)
  );

  $(window).click(function () {
    $(".send-request__right_select .options").removeClass("active");
    $(".send-request__right_select button").removeClass("active");
  });

  $(".send-request__right_select").on("click", (e) => {
    e.stopPropagation();
  });

  $(".send-request__right_select input").on("input", function (e) {
    $(".send-request__right_select .options").addClass("active");
    $(".send-request__right_select .options").html(
      countries.map((el) =>
        el.toLowerCase().includes(e.target.value.toLowerCase().trim())
          ? `<p class="options__item">${el}</p>`
          : false
      )
    );
  });

  $(".send-request__right_select button").on("click", function () {
    $(".send-request__right_select .options").toggleClass("active");
    $(this).toggleClass("active");
  });

  $(".send-request__right_select input").on("focus", function () {
    $(".send-request__right_select .options").toggleClass("active");
    $(".send-request__right_select button").addClass("active");
  });

  $(".options").click(function (e) {
    if ($(e.target).is("p")) {
      $(".send-request__right_select input").val($(e.target).text());
      $(".send-request__right_select .options").removeClass("active");
      $(".send-request__right_select button").removeClass("active");
    }
  });

  $(".working__btns-item").on("click", function () {
    $(".working__btns-item").removeClass("active");
    $(this).addClass("active");
    if ($(this).hasClass("btn-ip")) {
      $(".working__items.items-ooo").fadeOut(300);
      $(".working__items.items-ip").fadeIn(1000);
      itemsClass = ".items-ip";
    } else {
      $(".working__items.items-ip").fadeOut(500);
      $(".working__items.items-ooo").fadeIn(1000);
      itemsClass = ".items-ooo";
    }
  });
});
