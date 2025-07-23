document.addEventListener("DOMContentLoaded", function() {
    // ---- Navigation Logic ----
    // This section makes the navigation links show and hide the correct content sections.
    const navLinks = document.querySelectorAll('nav a, .dropdown-item a');
    const allSections = document.querySelectorAll('main section');

    // Function to hide all sections and show the home section initially
    function initializeSections() {
        allSections.forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById('carouselSection').classList.remove('hidden');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const sectionId = this.getAttribute('data-section-id');
            if (sectionId) {
                e.preventDefault();
                const targetSection = document.getElementById(sectionId);
                if (targetSection) {
                    allSections.forEach(section => {
                        section.classList.add('hidden');
                    });
                    targetSection.classList.remove('hidden');
                }
            }
        });
    });

    // Make sure the home section is visible on page load
    initializeSections();


    // ---- Carousel functionality ----
    // This section controls the auto-sliding, dot clicks, and navigation buttons for the carousel.
    const carousel = document.querySelector(".carousel");
    const carouselItems = document.querySelectorAll('.carousel_item');
    const carouselDots = document.querySelectorAll('.carousel_dot');
    const prevButton = document.querySelector('.carousel_button__prev');
    const nextButton = document.querySelector('.carousel_button__next');
    let currentIndex = 0;
    let autoSlideInterval;

    // Function to show the current slide
    function showSlide(index) {
        carouselItems.forEach(item => item.classList.remove('carousel_item__active'));
        carouselDots.forEach(dot => dot.classList.remove('carousel_dot__active'));

        if (carouselItems[index]) {
            carouselItems[index].classList.add('carousel_item__active');
        }
        if (carouselDots[index]) {
            carouselDots[index].classList.add('carousel_dot__active');
        }
    }

    // Function to go to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    }

    // Function to go to the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentIndex);
    }

    // Event listeners for navigation buttons
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            clearInterval(autoSlideInterval);
            nextSlide();
            startAutoSlide();
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            clearInterval(autoSlideInterval);
            prevSlide();
            startAutoSlide();
        });
    }

    // Event listeners for dots
    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(autoSlideInterval);
            currentIndex = index;
            showSlide(currentIndex);
            startAutoSlide();
        });
    });

    // Auto-slide functionality
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); // 5 seconds
    }

    // Stop auto-slide on hover to improve user experience
    carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    carousel.addEventListener('mouseleave', () => startAutoSlide());

    // Start the auto-slide and show the first slide when the page loads
    showSlide(currentIndex);
    startAutoSlide();
});
