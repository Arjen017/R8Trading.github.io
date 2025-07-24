document.addEventListener("DOMContentLoaded", function() {
    // ---- Navigation Logic ----
    const navLinks = document.querySelectorAll('nav a, .dropdown-item a');
    const allSections = document.querySelectorAll('main section');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navigationMenu = document.querySelector('.navigation');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

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

                    // Close mobile menu after clicking a link
                    if (navigationMenu.classList.contains('active')) {
                        navigationMenu.classList.remove('active');
                        mobileMenuToggle.textContent = 'menu'; // Reset icon
                    }
                    // Close any open dropdowns in mobile menu
                    dropdownToggles.forEach(toggle => {
                        toggle.nextElementSibling.classList.remove('active');
                    });
                }
            }
        });
    });

    // Toggle mobile navigation menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navigationMenu.classList.toggle('active');
            if (navigationMenu.classList.contains('active')) {
                mobileMenuToggle.textContent = 'close'; // Change to 'X' icon
            } else {
                mobileMenuToggle.textContent = 'menu'; // Change back to hamburger icon
                // Close any open dropdowns when menu is closed
                dropdownToggles.forEach(toggle => {
                    toggle.nextElementSibling.classList.remove('active');
                });
            }
        });
    }

    // Toggle dropdown menus within mobile navigation
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            // Only prevent default if it's a mobile view, to allow desktop hover
            if (window.innerWidth <= 768) {
                e.preventDefault(); 
                const dropdownMenu = this.nextElementSibling;
                dropdownMenu.classList.toggle('active');
            }
        });
    });

    // Close mobile menu if window is resized to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navigationMenu.classList.remove('active');
            mobileMenuToggle.textContent = 'menu';
            // Ensure dropdowns are visible on desktop if they were hidden by mobile logic
            dropdownToggles.forEach(toggle => {
                toggle.nextElementSibling.classList.remove('active'); // Remove active class
            });
        }
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
