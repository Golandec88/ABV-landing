import { langEN, langRU, langUZ, burgerOpenMenu, burgerCloseMenu } from "./constants.js";
import { toggleMenu } from "./functions.js";

burgerOpenMenu.addEventListener("click", () => {
    toggleMenu()
})

burgerCloseMenu.addEventListener("click", () => {
    toggleMenu()
})