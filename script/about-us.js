import { langEN, langRU, langUZ, burgerOpenMenu, burgerCloseMenu, join, auth } from "./constants.js";
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
mouseHandler(auth);
mouseHandler(join);

burgerOpenMenu.addEventListener("click", () => {
    toggleMenu()
})

burgerCloseMenu.addEventListener("click", () => {
    toggleMenu()
})