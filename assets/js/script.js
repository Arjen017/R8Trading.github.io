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
     * Utility function to show a specific section and hide others
     * @param {HTMLElement} sectionToShow - The section to display
     */
    function showSection(sectionToShow) {
        // Hide all sections first
        Object.values(sections).forEach((section) => {
            section.classList.add("hidden");
            section.style.display = "none";
        });

        // Show the target section
        if (sectionToShow) {
            sectionToShow.classList.remove("hidden");
            sectionToShow.style.display = "block";

            // Special handling for customer section grid
            if (sectionToShow.id === "customerSection") {
                const grid = sectionToShow.querySelector(".masonry-grid");
                if (grid) {
                    grid.style.display = "grid";
                }
            }
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
                const targetSection = sections[sectionId];

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

                // Close all dropdowns first
                closeAllDropdowns();

                // Toggle current dropdown
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
        if (homeLink) {
            homeLink.click(); // Simulate click to set initial view
        }
    }

    // Initialize website functionality
    setupNavigation();
    setupDropdowns();
    initializeDefaultView();
});
