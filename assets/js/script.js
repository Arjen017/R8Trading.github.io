document.addEventListener("DOMContentLoaded", function () {
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

    // Add click event listeners to navigation links
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            setActiveLink(this);

            // Get the section ID to show
            const sectionId = this.getAttribute("data-section-id");
            if (sections[sectionId]) {
                showSection(sections[sectionId]);
                console.log(`Showing section: ${sectionId}`);
            } else {
                console.error(`Section with ID "${sectionId}" not found in sections object.`);
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

    // Ensure dropdown toggle doesn't interfere with navigation
    document.querySelectorAll(".dropdown-toggle").forEach((dropdownToggle) => {
        dropdownToggle.addEventListener("click", function (event) {
            event.preventDefault();
            const dropdownMenuId = this.getAttribute("onclick").match(/'(.*?)'/)[1];
            const dropdownMenu = document.getElementById(dropdownMenuId);
            if (dropdownMenu) {
                dropdownMenu.classList.toggle("hidden");
            }
        });
    });

    // Log map clicks for debugging (optional)
    sections.mapSection.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default behavior if needed
        console.log("Map link clicked.");
    });
});
