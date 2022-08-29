import '../../styles/index.css'
import './home.css';
import '../../partials/navbar/navbar.html';
import '../../partials/map/map.html';

import '../../partials/navbar/navbar.js';
import '../../partials/footer/footer.js';
import '../../partials/map/map.js';


document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("video_iframe")
    const cardVideo = document.querySelectorAll(".card-video")
    // const map = document.querySelectorAll(".map")[0]
    // const cardBtnFind = document.querySelectorAll(".box_card_btn")

    // cardBtnFind.forEach(key => {
    //     key.addEventListener("click", (event) => {
    //         map.src = key.getAttribute("title")
    //     })
    // })

    cardVideo.forEach(key => {
        key.addEventListener("click", (event) => {
            cardVideo.forEach(key => key.classList.remove("active"))
            key.classList.toggle("active")
            video.src = key.getAttribute("title")
        })
    })
})