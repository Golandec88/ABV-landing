$(document).ready(function () {
  var itemsClass = ".items-ooo";
  $(".working__item-num.go-top").on("click", function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
  var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
  $(".send-request__right_select .options").html(countries.map(function (el) {
    return "<p class=\"options__item\">".concat(el, "</p>");
  }));
  $(window).click(function () {
    $(".send-request__right_select .options").removeClass("active");
    $(".send-request__right_select button").removeClass("active");
  });
  $(".send-request__right_select").on("click", function (e) {
    e.stopPropagation();
  });
  $(".send-request__right_select input").on("input", function (e) {
    $(".send-request__right_select .options").addClass("active");
    $(".send-request__right_select .options").html(countries.map(function (el) {
      return el.toLowerCase().includes(e.target.value.toLowerCase().trim()) ? "<p class=\"options__item\">".concat(el, "</p>") : false;
    }));
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
    touchpadSupport: true
  });
});