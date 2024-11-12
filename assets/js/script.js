document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    const dropdown = document.querySelector('.dropdown');
    const batteryDropdown = document.getElementById('batteryDropdown');
    const navigation = document.querySelector('.navigation');

    // Show dropdown menu when hovering over navigation
    navigation.addEventListener('mouseenter', function() {
        batteryDropdown.classList.add('show');
    });

    // Hide dropdown menu when leaving navigation
    navigation.addEventListener('mouseleave', function() {
        batteryDropdown.classList.remove('show');
    });

    // Carousel functionality
    const carouselSlide = document.querySelector(".carousel-slide");
    const images = document.querySelectorAll(".carousel-slide img");
    let counter = 0;
    const slideWidth = images[0].clientWidth;

    // Function to show current slide
    function showSlide() {
        carouselSlide.style.transform = `translateX(${-counter * slideWidth}px)`;
    }

    // Move to the next slide
    function nextSlide() {
        counter = (counter + 1) % images.length;
        showSlide();
    }

    // Move to the previous slide
    function prevSlide() {
        counter = (counter - 1 + images.length) % images.length;
        showSlide();
    }

    // Auto-slide every 3 seconds
    setInterval(nextSlide, 3000);

    // Adjust the slide on window resize
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
