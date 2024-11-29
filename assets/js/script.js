document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded without inline scripts.");
    
    const homeLink = document.querySelector("a[href='#']");
    const mapLink = document.getElementById("mapLink");
    const galleryDropdownItems = document.querySelectorAll("#galleryDropdown .dropdown-item a");
    const carouselSection = document.getElementById("carouselSection");
    const mapSection = document.getElementById("mapSection");
    const customerSection = document.getElementById("customerSection");

    // Utility function to show a section and hide others
    function showSection(sectionToShow) {
        console.log("Showing section:", sectionToShow.id); // Debug
        const sections = [carouselSection, mapSection, customerSection];
        sections.forEach((section) => {
            if (section === sectionToShow) {
                section.style.display = "block";
                section.classList.remove("hidden");
            } else {
                section.style.display = "none";
                section.classList.add("hidden");
            }
        });
    }

    // Home link click event
    homeLink.addEventListener("click", function (event) {
        event.preventDefault();
        showSection(carouselSection);
        console.log("Home link clicked");

        // Show carousel and hide map
        carouselSection.style.display = "block";
    });

    // Map link click event
    mapLink.addEventListener("click", function (event) {
        event.preventDefault();
        showSection(mapSection);
        console.log("Map link clicked");
    });

    // Gallery dropdown items click event
    galleryDropdownItems.forEach((item) => {
        item.addEventListener("click", function (event) {
            event.preventDefault();

            // Check which dropdown item is clicked
            const selectedText = item.textContent.trim();
            console.log("Gallery item clicked:", selectedText);

            if (selectedText === "Customer") {
                showSection(customerSection); // Show masonry grid layout for "Customer"
            }
        });
    });
});
