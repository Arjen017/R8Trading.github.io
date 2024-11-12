document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    const dropdown = document.querySelector('.dropdown');
    const batteryDropdown = document.getElementById('batteryDropdown');
    let hideTimeout;

    // Show dropdown menu when entering dropdown area
    dropdown.addEventListener('mouseenter', function() {
        clearTimeout(hideTimeout);  // Clear any hide timeout if the user re-enters
        batteryDropdown.classList.add('show');
    });

    // Hide dropdown menu with a slight delay when leaving dropdown area
    dropdown.addEventListener('mouseleave', function() {
        hideTimeout = setTimeout(() => {
            batteryDropdown.classList.remove('show');
        }, 100); // Adjust delay if needed
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
