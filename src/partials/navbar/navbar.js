import './navbar.css'

document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.getElementsByClassName("navbar-content")[0]

    window.addEventListener("scroll", (e) => {
        if(window.scrollY >= 80) {
            navBar.classList.add("active")
        } else {
            navBar.classList.remove("active")
        }
    })   
})