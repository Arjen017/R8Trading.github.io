// assets/js/carousel.js

document.addEventListener("DOMContentLoaded", function() {
    const carouselSlide = document.querySelector(".carousel-slide");
    const images = document.querySelectorAll(".carousel-slide img");

    let counter = 0;

    function carousel() {
        counter++;
        if (counter >= images.length) {
            counter = 0;
        }
        carouselSlide.style.transform = `translateX(${-counter * 350}px)`;
    }

    setInterval(carousel, 3000); // Change slide every 3 seconds
});
