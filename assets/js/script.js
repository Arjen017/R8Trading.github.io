document.addEventListener("DOMContentLoaded", function () {
    const mapSection = document.getElementById("mapSection");
    const mapLink = document.getElementById("mapLink");
    console.log("JavaScript loaded.");

    // Selectors
    const navLinks = document.querySelectorAll(".navigation a");
    const sections = {
        carouselSection: document.getElementById("carouselSection"),
        batteryCarsSection: document.getElementById("batteryCarsSection"),
        batteryMotorcycleSection: document.getElementById("batteryMotorcycleSection"),
        mapSection: document.getElementById("mapSection"),
        customerSection: document.getElementById("customerSection"),
        eventsSection: document.getElementById("eventsSection"),
        contactSection: document.getElementById("contactSection"),
    };

    // Utility: Show a section and hide others
    function showSection(sectionToShow) {
        Object.values(sections).forEach((section) => {
            if (section === sectionToShow) {
                section.style.display = "block";
                section.classList.remove("hidden");
            } else {
                section.style.display = "none";
                section.classList.add("hidden");
            }
        });
    }

    // Utility: Highlight active link
    function setActiveLink(targetLink) {
        navLinks.forEach((link) => link.classList.remove("active"));
        targetLink.classList.add("active");
    }

    // Add click event for map link
    mapLink.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Map link clicked");

        if (mapSection) {
            mapSection.classList.toggle("show"); // Toggle the 'show' class
            console.log(`Map section class list: ${mapSection.classList}`);
        } else {
            console.error("mapSection element not found.");
        }

        setActiveLink(mapLink);
    });

    // Add click event listeners to navigation links
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            setActiveLink(this);

            const sectionId = this.getAttribute("data-section-id");
            if (sections[sectionId]) {
                showSection(sections[sectionId]);
                console.log(`Showing section: ${sectionId}`);
            } else {
                console.error(`Section with ID "${sectionId}" not found.`);
            }
        });
    });

    // Set the default active link and section on page load
    if (navLinks.length > 0) {
        const defaultLink = navLinks[0];
        setActiveLink(defaultLink);
        const defaultSectionId = defaultLink.getAttribute("data-section-id");
        if (sections[defaultSectionId]) {
            showSection(sections[defaultSectionId]);
        } else {
            console.error(`Default section ID "${defaultSectionId}" not found.`);
        }
    }

    // Dropdown toggle logic
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
        dropdown.addEventListener("click", function (event) {
            event.preventDefault();
            const menu = this.querySelector(".dropdown-menu");
            if (menu) {
                menu.classList.toggle("hidden");
            }
        });
    });
});
