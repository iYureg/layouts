const hiddenMenu = document.querySelector(".hidden_menu");
const burgerBtn = document.querySelector(".header__navigation_burger");
// console.log(burgerBtn);
// console.log(hiddenMenu);

burgerBtn.addEventListener("click", () => hiddenMenu.classList.toggle("show"));
