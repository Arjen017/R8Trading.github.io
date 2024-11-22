document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.querySelector("a[href='#']");
    const mapLink = document.getElementById("mapLink");
    const galleryDropdownItems = document.querySelectorAll("#galleryDropdown .dropdown-item a");
    const carouselSection = document.getElementById("carouselSection");
    const mapSection = document.getElementById("mapSection");
    const customerSection = document.getElementById("customerSection");

    // Utility function to show a section and hide others
    function showSection(sectionToShow) {
        const sections = [carouselSection, mapSection, customerSection];
        sections.forEach((section) => {
            section.style.display = section === sectionToShow ? "block" : "none";
        });
    }

    // Home link click event
    homeLink.addEventListener("click", function (event) {
        event.preventDefault();
        showSection(carouselSection);
    });

    // Map link click event
    mapLink.addEventListener("click", function (event) {
        event.preventDefault();
        showSection(mapSection);
    });

    // Gallery dropdown items click event
    galleryDropdownItems.forEach((item) => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            if (item.textContent === "Customer") {
                showSection(customerSection);
            }
            // Add logic for other gallery items if needed
        });
    });
});
