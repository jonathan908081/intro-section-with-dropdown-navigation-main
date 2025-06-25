const closeBtn = document.querySelector(".close__btn"),
  opneMenu = document.querySelector(".open__menu"),
  navContainer = document.querySelector(".navigation__container"),
  navMenu = document.querySelector(".nav___menu"),
  dropdownMenu = document.querySelectorAll(".dropdown__menu"),
  section = document.querySelector("section");

opneMenu.addEventListener("click", () => {
  navContainer.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  navContainer.classList.remove("active");
});
section.addEventListener("click", (e) => {
  if (e.target === section) {
    navContainer.classList.remove("active");
  }
});
document.body.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    navContainer.classList.remove("active");
  }
});
navMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownMenu.classList.add("active");
});
