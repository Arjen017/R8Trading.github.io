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
        // Set the initial active link
        const homeLink = document.getElementById('homeLink');
        if (homeLink) {
            homeLink.classList.add('active');
        }
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
                    navLinks.forEach(navLink => {
                        navLink.classList.remove('active');
                    });
                    
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
    let currentIndex = 0;
    let autoSlideInterval;

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

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    }

    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(autoSlideInterval);
            currentIndex = index;
            showSlide(currentIndex);
            startAutoSlide();
        });
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    if (carousel) {
        carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        carousel.addEventListener('mouseleave', () => startAutoSlide());
    }

    showSlide(currentIndex);
    startAutoSlide();
});
