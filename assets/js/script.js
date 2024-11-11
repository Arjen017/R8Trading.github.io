document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector('.dropdown');
    const batteryDropdown = document.getElementById('batteryDropdown');
    let dropdownOpen = false;

    // Show dropdown menu on hover of the dropdown
    dropdown.addEventListener('mouseenter', function() {
        batteryDropdown.classList.add('show');
        dropdownOpen = true;
    });

    // Hide dropdown menu only when the mouse leaves both the dropdown and the menu itself
    dropdown.addEventListener('mouseleave', function() {
        setTimeout(() => {
            if (!dropdown.matches(':hover') && !batteryDropdown.matches(':hover')) {
                batteryDropdown.classList.remove('show');
                dropdownOpen = false;
            }
        }, 100); // Add a slight delay to ensure the menu doesn't disappear too quickly
    });

    batteryDropdown.addEventListener('mouseleave', function() {
        setTimeout(() => {
            if (!dropdown.matches(':hover') && !batteryDropdown.matches(':hover')) {
                batteryDropdown.classList.remove('show');
                dropdownOpen = false;
            }
        }, 100);
    });

    // Carousel functionality
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
