var icon = document.querySelector("header .icon");
var links = document.querySelector("header nav ul.d-flex");
var up = document.querySelector(".UP");
icon.addEventListener("click", function () {
  icon.classList.toggle("icons");
  links.classList.toggle("action");
  links.classList.toggle("left");
});
window.addEventListener("scroll", function () {
  if (window.scrollY >= 600) {
    up.style.opacity = "1";
  } else {
    up.style.opacity = "0";
  }
});
up.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});
//Change Color In Style Using JS
// document.documentElement.style.setProperty('--main-color',"#fc0");
