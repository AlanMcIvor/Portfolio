// mobile navigation

let nav = document.querySelector(".navbar");
let burger = document.querySelector(".hamburger-icon");

let icon = document.querySelector(".icon");

// when burger is clicked show or hide nav bar
burger.addEventListener("click", function () {
  // when buger is clicked show the nav and change icon colour to white
  nav.classList.toggle("showNav");
  burger.classList.toggle("burgerWhite");

  //   if the nav class list contains teh show nav class then remove the bars and add the close icon
  if (nav.classList.contains("showNav")) {
    icon.classList.add("fa-xmark");
    icon.classList.remove("fa-bars");
  }

  //   if the nav class list does NOT contain teh show nav class then remove the close icon andf add the bars
  if (!nav.classList.contains("showNav")) {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});
