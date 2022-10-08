const elemToggleFunc = (elem) => {
  elem.classList.toggle("active");
};

// * navbar ....
const navbar = document.querySelector(".navbar");
const navToggleBtn = document.querySelector(".nav-toggle-btn");
const overlay = document.querySelector(".overlay");

const navElemArr = [navToggleBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}

// * header sticky
const header = document.querySelector("#header");

let lastScrollPosition = 0;

window.addEventListener("scroll", function () {
  let scrollPosition = window.pageYOffset;

  if (scrollPosition > lastScrollPosition) {
    header.classList.remove("active");
  } else {
    header.classList.add("active");
  }

  lastScrollPosition = scrollPosition <= 0 ? 0 : scrollPosition;
});
