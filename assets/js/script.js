document.addEventListener("DOMContentLoaded", function() {

      const carouselSlide = document.querySelector(".carousel-slide");
    const images = document.querySelectorAll(".carousel-slide img");
    let counter = 0;
    const slideWidth = images[0].clientWidth;

    function showSlide() {
        carouselSlide.style.transform = `translateX(${-counter * slideWidth}px)`;
    }

    function nextSlide() {
        counter = (counter + 1) % images.length;
        showSlide();
    }

    function prevSlide() {
        counter = (counter - 1 + images.length) % images.length;
        showSlide();
    }

    setInterval(nextSlide, 3000);

    window.addEventListener("resize", () => {
        showSlide();
    });

    // Initialize Slick carousel with fade effect
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });
});
