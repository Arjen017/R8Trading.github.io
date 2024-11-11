document.addEventListener("DOMContentLoaded", function() {
    const navigation = document.querySelector('.navigation');
    const batteryDropdown = document.getElementById('batteryDropdown');
    let dropdownOpen = false;

    // Toggle the dropdown visibility on click
    document.querySelector('.dropdown-toggle').addEventListener('click', function(event) {
        event.preventDefault();
        dropdownOpen = !dropdownOpen;
        batteryDropdown.classList.toggle('show', dropdownOpen);
    });

    // Show dropdown menu on hover of dropdown area or batteryDropdown
    document.querySelector('.dropdown').addEventListener('mouseenter', function() {
        batteryDropdown.classList.add('show');
        dropdownOpen = true;
    });

    // Hide dropdown only when the mouse leaves both the dropdown and the menu itself
    document.querySelector('.dropdown').addEventListener('mouseleave', function() {
        batteryDropdown.classList.remove('show');
        dropdownOpen = false;
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
