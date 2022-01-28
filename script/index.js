const langRU = ".header__nav-item_bordered__ru";
const langEN = ".header__nav-item_bordered__eng";
const langUZ = ".header__nav-item_bordered__uzb";
const aboutYellow = ".about-us__button_yellow";
const aboutLight = ".about-us__button_light";
const startWorking = ".start-working__button";

const infoBadge = document.querySelectorAll(".info__badge-item")
function mouseHandler(btnClass) {
    let btn = document.querySelector(btnClass);
    btn.onmousemove = function (e) {
        let x = e.clientX - btn.offsetLeft;
        let y = e.clientY - btn.offsetTop;
        btn.style.setProperty('--x', -25 + 'px');
        btn.style.setProperty('--y', -40 + 'px');
    }
}

mouseHandler(langRU);
mouseHandler(langUZ);
mouseHandler(langEN);
mouseHandler(aboutLight);
mouseHandler(aboutYellow);
mouseHandler(startWorking);

function handleToggle(e){
    const button = e.querySelector(".info__badge-span_hidden")
    const image = e.querySelector(".info__badge-item-img")
    image.classList.toggle("info__badge-item-img_expanded")
    button.classList.toggle("info__badge-span_expanded")
}

function expandSpan() {
    infoBadge.forEach((elem, index) => {
        elem.addEventListener("click", () => handleToggle(elem))
    })
}

expandSpan()


