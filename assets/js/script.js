document.addEventListener("DOMContentLoaded", function() {
    // Carousel functionality
    const carouselSlide = document.querySelector(".carousel-slide");
    const images = document.querySelectorAll(".carousel-slide img");

    let counter = 0;

    function carousel() {
        counter++;
        if (counter >= images.length) {
            counter = 0;
        }
        carouselSlide.style.transform = `translateX(${-counter * 640}px)`;
    }

    setInterval(carousel, 3000);
});
