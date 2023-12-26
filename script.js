const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");

// hamburger click event
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});

// change nav background when scroll position is greater than 300
document.addEventListener("DOMContentLoaded", function () {
  function handleScroll() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    var scrollThreshold = 300;
    if (scrollPosition > scrollThreshold) {
      header.style.backgroundColor = "#1A1F4B";
    } else {
      header.style.backgroundColor = "";
    }
  }

  window.addEventListener("scroll", handleScroll);
});
