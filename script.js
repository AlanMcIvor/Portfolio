// grab elements from dom

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const desktopBg = document.querySelector(".desktop_bg");
const mobileBg = document.querySelector(".mobile_bg");




// hamburger click event

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
})


// toggle hero image based in screen size

window.addEventListener('resize', () => {

    let width = window.innerWidth;
    // console.log(width)

    if (width <= 1051){
        desktopBg.classList.add("hide_bg");
        mobileBg.classList.remove("hide_bg");
    } else{
        desktopBg.classList.remove("hide_bg");
        mobileBg.classList.add("hide_bg");
    }
})