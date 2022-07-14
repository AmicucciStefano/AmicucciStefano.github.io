const divToggle = document.querySelector(".div-toggle");
const links = document.querySelector(".links");

divToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});