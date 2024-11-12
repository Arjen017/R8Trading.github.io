document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    const dropdown = document.querySelector('.dropdown');
    const batteryDropdown = document.getElementById('batteryDropdown');
    
    // Function to show the dropdown menu
    function showDropdown() {
        batteryDropdown.classList.add('show');
    }

    // Function to hide the dropdown menu
    function hideDropdown() {
        batteryDropdown.classList.remove('show');
    }

    // Show dropdown menu on mouse enter
    dropdown.addEventListener('mouseenter', showDropdown);
    batteryDropdown.addEventListener('mouseenter', showDropdown);

    // Hide dropdown menu on mouse leave
    dropdown.addEventListener('mouseleave', hideDropdown);
    batteryDropdown.addEventListener('mouseleave', hideDropdown);

    // Close dropdown menu when clicking outside of the dropdown
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target) && !batteryDropdown.contains(event.target)) {
            hideDropdown();
        }
    });

    // Prevent hiding when clicking on a dropdown item
    batteryDropdown.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event from bubbling up
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
