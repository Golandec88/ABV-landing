// const langRU = ".header__nav-item_bordered__ru";
// const langEN = ".header__nav-item_bordered__eng";
// const langUZ = ".header__nav-item_bordered__uzb";
// const aboutYellow = ".about-us__button_yellow";
// const aboutLight = ".about-us__button_light";
// const startWorking = ".start-working__button";
// const auth = ".header__nav-item_yellow_bordered";

// const infoBadge = document.querySelectorAll(".info__badge-item");

const burgerOpenMenu = document.querySelector(".header__burger-open-icon");
const burgerCloseMenu = document.querySelector(".header__burger-close-icon");


// function mouseHandler(btnClass) {
//     let btn = document.querySelector(btnClass);
//     btn.onmousemove = function (e) {
//         let x = e.clientX - btn.offsetLeft;
//         let y = e.clientY - btn.offsetTop;
//         btn.style.setProperty('--x', -25 + 'px');
//         btn.style.setProperty('--y', -40 + 'px');
//     }
// }

// mouseHandler(langRU);
// mouseHandler(langUZ);
// mouseHandler(langEN);
// mouseHandler(aboutLight);
// mouseHandler(aboutYellow);
// mouseHandler(startWorking);
// mouseHandler(auth);

// function handleToggleAccordion(e){
//     const button = e.querySelector(".info__badge-span_hidden")
//     const image = e.querySelector(".info__badge-item-img")
//     image.classList.toggle("info__badge-item-img_expanded")
//     button.classList.toggle("info__badge-span_expanded")
// }

// function expandSpan() {
//     infoBadge.forEach((elem, index) => {
//         elem.addEventListener("click", () => handleToggleAccordion(elem))
//     })
// }

// expandSpan()

function toggleMenu() {
    const burgerBox = document.querySelector(".header__burger-menu")
    const burgerIcon = document.querySelector(".header__burger-open-icon")
    burgerBox.classList.toggle("header__burger-menu_opened")
    burgerIcon.classList.toggle("header__burger-icon")
}

burgerOpenMenu.addEventListener("click", () => {
    toggleMenu()
})

burgerCloseMenu.addEventListener("click", () => {
    toggleMenu()
})