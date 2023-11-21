// grab elements from dom

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");


// event listener

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
})

