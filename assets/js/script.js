document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    const dropdown = document.querySelector('.dropdown');
    const batteryDropdown = document.getElementById('batteryDropdown');
    let dropdownTimeout;

    // Function to show dropdown
    function showDropdown() {
        clearTimeout(dropdownTimeout); // Clear any previous timeout
        batteryDropdown.classList.add('show');
    }

    // Function to hide dropdown with delay
    function hideDropdown() {
        dropdownTimeout = setTimeout(() => {
            batteryDropdown.classList.remove('show');
        }, 200); // Adds a slight delay before hiding
    }

    // Show dropdown menu on mouse enter
    dropdown.addEventListener('mouseenter', showDropdown);
    batteryDropdown.addEventListener('mouseenter', showDropdown);

    // Hide dropdown menu only when leaving both dropdown and dropdown-menu areas
    dropdown.addEventListener('mouseleave', hideDropdown);
    batteryDropdown.addEventListener('mouseleave', hideDropdown);

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

