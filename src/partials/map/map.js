import './map.css'

document.addEventListener("DOMContentLoaded", () => {
    const map = document.querySelectorAll(".map")[0]
    const cardBtnFind = document.querySelectorAll(".box_card_btn")

    cardBtnFind.forEach(key => {
        key.addEventListener("click", (event) => {
            map.src = key.getAttribute("title")
        })
    })
})