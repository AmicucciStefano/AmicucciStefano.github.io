const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const link = document.querySelector(".link")

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
  link.classList.toggle("notShow-link");
});