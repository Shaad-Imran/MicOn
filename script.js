const elemToggleFunc = (elem) => {
  elem.classList.toggle("active");
};

// * navbar ....
const navbar = document.querySelector(".navbar");
const navToggleBtn = document.querySelector(".nav-toggle-btn");
const overlay = document.querySelector(".overlay");

const navElemArr = [navToggleBtn, overlay];

navElemArr.forEach((element) => {
  element.addEventListener("click", () => {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
});
