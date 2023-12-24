const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

// hamburger click event
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});
