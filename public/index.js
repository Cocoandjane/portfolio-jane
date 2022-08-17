const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navList.classList.toggle("active")
})

const navItems = document.querySelectorAll(".nav__link")

navItems.forEach(navItem => {
    navItem.addEventListener("click", ()=> {
        hamburger.classList.remove("active")
        navList.classList.remove("active")
    })
})