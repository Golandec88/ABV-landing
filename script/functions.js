export function toggleMenu() {
    const burgerBox = document.querySelector(".header__burger-menu")
    const burgerIcon = document.querySelector(".header__burger-open-icon")
    burgerBox.classList.toggle("header__burger-menu_opened")
    burgerIcon.classList.toggle("header__burger-icon")
}