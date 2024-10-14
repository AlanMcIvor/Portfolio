// mobile menu

// dom elements
let burger = document.querySelector(".hamburger");
let icon = document.querySelector(".icon");

let mobileMenu = document.querySelector(".mobileNav");

// when burger menu clicked toggle nav
burger.addEventListener("click", function () {
  mobileMenu.classList.toggle("showNav");

  //   add or remove burger and cross icon
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});
