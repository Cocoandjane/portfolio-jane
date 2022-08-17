const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__item")

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav_open")
    console.log("click")
})

navLinks.forEach(navLink => {
    navLink.addEventListener("click", (event) => {
        document.body.classList.remove("nav_open")
    })
})
