import {langRU, langEN, langUZ, aboutYellow, aboutLight, startWorking, auth, infoBadge, join, burgerOpenMenu, burgerCloseMenu} from "./constants.js"
import { toggleMenu } from "./functions.js";
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
mouseHandler(auth);

function handleToggleAccordion(e){
    const button = e.querySelector(".info__badge-span_hidden")
    const image = e.querySelector(".info__badge-item-img")
    image.classList.toggle("info__badge-item-img_expanded")
    button.classList.toggle("info__badge-span_expanded")
}

function expandSpan() {
    infoBadge.forEach((elem, index) => {
        elem.addEventListener("click", () => handleToggleAccordion(elem))
    })
}

expandSpan()

burgerOpenMenu.addEventListener("click", () => {
    toggleMenu()
})

burgerCloseMenu.addEventListener("click", () => {
    toggleMenu()
})