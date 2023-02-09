"use strict";
const navbar = document.getElementById("navbar");
const openMenu = document.querySelector(".open-btn");
const closeMenu = document.querySelector(".close-btn");
const hero = document.querySelector(".hero");

openMenu.addEventListener("click", function () {
  navbar.style.transform = "translateX(0)";
  hero.classList.add("opacity--0-4");
  openMenu.style.display = "none";
  closeMenu.style.display = "inline-block";
});

closeMenu.addEventListener("click", function () {
  navbar.style.transform = "translateX(120%)";
  hero.classList.remove("opacity--0-4");
  closeMenu.style.display = "none";
  openMenu.style.display = "inline-block";
});
