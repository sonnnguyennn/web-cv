const button = document.querySelector(".header-bar");
const menu = document.querySelector(".nav-menu-res");

button.addEventListener("click", () => {
    menu.classList.toggle ("reveal");
})