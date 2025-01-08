// Main JavaScript for R8 Battery Trading Website
document.addEventListener("DOMContentLoaded", function () {
    // Console log to confirm script is loaded
    console.log("R8 Battery Trading: JavaScript fully initialized.");

    // Select essential DOM elements
    const navLinks = document.querySelectorAll(".navigation a");
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    
    // Sections mapping for dynamic content management
    const sections = {
        carouselSection: document.getElementById("carouselSection"),
        batteryCarsSection: document.getElementById("batteryCarsSection"),
        batteryMotorcycleSection: document.getElementById("batteryMotorcycleSection"),
        mapSection: document.getElementById("mapSection"),
        customerSection: document.getElementById("customerSection"),
        eventsSection: document.getElementById("eventsSection"),
        contactSection: document.getElementById("contactSection"),
    };

    /**
     * Initial setup to hide all sections except the carousel
     */
    function initializeSectionVisibility() {
        Object.values(sections).forEach((section) => {
            if (section.id !== "carouselSection") {
                section.style.display = "none";
                console.log(`Hiding: ${section.id}`);
            }
        });
    }

    /**
     * Utility function to show a specific section and hide others
     * @param {HTMLElement} sectionToShow - The section to display
     */
   function showSection(sectionToShow) {
    // Hide all sections
    Object.values(sections).forEach((section) => {
        section.classList.remove("show");
    });

    // Show the target section
    if (sectionToShow) {
        sectionToShow.classList.add("show");
    }
}


    /**
     * Manage navigation link interactions
     */
    function setupNavigation() {
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Remove active state from all links
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");

            // Get the target section
            const sectionId = this.getAttribute("data-section-id");
            const targetSection = sectionId ? sections[sectionId] : null;

            if (targetSection) {
                showSection(targetSection);
            } else {
                console.warn(`Section "${sectionId}" not found.`);
            }

            // Close any open dropdowns
            closeAllDropdowns();
        });
    });
}


    /**
     * Manage dropdown menu interactions
     */
    function setupDropdowns() {
    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            // Close all dropdowns
            closeAllDropdowns();

            // Open the current dropdown
            const dropdown = this.closest(".dropdown");
            const dropdownMenu = dropdown.querySelector(".dropdown-menu");
            dropdownMenu.classList.toggle("show");
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", closeAllDropdowns);
}
    /**
     * Close all dropdown menus
     */
    function closeAllDropdowns() {
        const dropdownMenus = document.querySelectorAll(".dropdown-menu");
        dropdownMenus.forEach(menu => menu.classList.remove("show"));
    }   

    /**
     * Initialize the default view
     */
    function initializeDefaultView() {
    const homeLink = document.getElementById("homeLink");
    
    // Simulate click on the "homeLink" if it exists
    if (homeLink) {
        homeLink.click(); // Set the initial view
    }
    
    // Initialize the Slick carousel
    $('.carousel-slide').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true
    });
}


    // Initialize website functionality
    function initializeSectionVisibility() {
    Object.values(sections).forEach((section) => {
        section.style.display = "none"; // Hide all sections
    });
    sections.carouselSection.style.display = "block"; // Show the carousel section
    }
    setupNavigation();
    setupDropdowns();
    initializeDefaultView();
});
