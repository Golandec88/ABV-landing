document.addEventListener("DOMContentLoaded", function() {
    const langDropDown      = document.querySelectorAll(".dropdown");
    const accordions        = document.querySelectorAll(".info__badge-item")
    const button            = document.querySelectorAll(".button[color]");
    const burger            = document.querySelector(".header__burger");
    const menu              = document.querySelector(".header__menu")

    handleToggleDropdown(langDropDown);
    handleToggleAccordion(accordions);
    buttonAnimation(button);
    toggleMenu(burger, menu);
});
const targetSorter = (target, callback) => {
    if(!target) return;

    if(target instanceof Element) callback(target)
    else if(target instanceof NodeList)
        for(const item of target) {
            if(!item) continue;
            callback(item)
        }
    else if(typeof target === "string") {
        const btn = document.querySelector(target);
        if(!btn) return;

        callback(btn)
    }
}
const buttonAnimation = (target) => {
    const setAnimationProperty = (target) => {
        if(!target) return;
        target.onmousemove = event => {
            target.style.setProperty('--circle-width', target.offsetWidth + 'px');
            target.style.setProperty('--circle-top-position', event.offsetY - (target.offsetWidth / 2) + 'px');
            target.style.setProperty('--circle-left-position', event.offsetX - (target.offsetWidth / 2) + 'px');
        }
    }
    targetSorter(target, setAnimationProperty)
}
const handleToggleDropdown = (target) => {
    targetSorter(target, outTarget => {
        const activeArea = outTarget.getElementsByClassName("dropdown__selected-item")[0];
        const list = outTarget.getElementsByClassName("dropdown__list")[0];

        activeArea.onclick = () => {
            list.classList.add("active");
            activeArea.classList.add("active");
        }

        const clickOutsideList = (event, target) => {
            if(list.classList.contains("active") && !target.contains(event.target)) {
                list.classList.remove("active");
                activeArea.classList.remove("active");
            }
        }

        document.addEventListener("click", (event) => {
            clickOutsideList(event, outTarget)
        })
    })
}
const handleToggleAccordion = (target) => {
    if(!target) return;

    const toggleAccordion = (target) => {
        target.addEventListener("click", () => {
            target.classList.toggle("active")
        })
    }

    targetSorter(target, toggleAccordion)
}
const toggleMenu = (burger, menu) => {
    burger.addEventListener("click", () => {
        burger.classList.toggle("active")
        menu.classList.toggle("active")
    })
}