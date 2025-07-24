document.addEventListener("DOMContentLoaded", function() {
    // ---- Navigation Logic ----
    const navLinks = document.querySelectorAll('nav a, .dropdown-item a');
    const allSections = document.querySelectorAll('main section');

    // Function to hide all sections and show the home section initially
    function initializeSections() {
        allSections.forEach(section => {
            section.classList.add('hidden');
        });
        const carouselSection = document.getElementById('carouselSection');
        if (carouselSection) {
            carouselSection.classList.remove('hidden');
        }
        // Set the initial active link for the Home section
        const homeLink = document.getElementById('homeLink');
        if (homeLink) {
            homeLink.classList.add('active');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const sectionId = this.getAttribute('data-section-id');
            if (sectionId) {
                e.preventDefault(); // Prevent default link behavior (e.g., jumping to top)
                const targetSection = document.getElementById(sectionId);
                if (targetSection) {
                    // Hide all sections first
                    allSections.forEach(section => {
                        section.classList.add('hidden');
                    });
                    // Remove 'active' class from all navigation links
                    navLinks.forEach(navLink => {
                        navLink.classList.remove('active');
                    });
                    
                    // Then show the target section
                    targetSection.classList.remove('hidden');
                    // Add 'active' class to the clicked link
                    this.classList.add('active');
                }
            }
        });
    });

    initializeSections();


    // ---- Carousel functionality ----
    const carousel = document.querySelector(".carousel");
    const carouselItems = document.querySelectorAll('.carousel_item');
    const carouselDots = document.querySelectorAll('.carousel_dot');
    // Removed prevButton and nextButton as they are no longer in HTML
    let currentIndex = 0;
    let autoSlideInterval;

    // Function to show the current slide
    function showSlide(index) {
        // Remove active classes from all items and dots
        carouselItems.forEach(item => item.classList.remove('carousel_item__active'));
        carouselDots.forEach(dot => dot.classList.remove('carousel_dot__active'));

        // Add active class to the current item and dot
        if (carouselItems[index]) {
            carouselItems[index].classList.add('carousel_item__active');
        }
        if (carouselDots[index]) {
            carouselDots[index].classList.add('carousel_dot__active');
        }
    }

    // Function to go to the next slide (used by auto-slide and dots)
    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length; // Cycle through slides
        showSlide(currentIndex);
    }

    // Event listeners for dots (only dots remain for navigation)
    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(autoSlideInterval); // Stop auto-slide on manual click
            currentIndex = index; // Set current index to the clicked dot's index
            showSlide(currentIndex);
            startAutoSlide(); // Restart auto-slide after manual interaction
        });
    });

    // Auto-slide functionality
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds (5000 milliseconds)
    }

    // Optional: Stop auto-slide on hover and resume on mouse leave for better user experience
    if (carousel) {
        carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        carousel.addEventListener('mouseleave', () => startAutoSlide());
    }

    // Initial display of the first slide and start auto-slide when the page loads
    showSlide(currentIndex);
    startAutoSlide();
});
