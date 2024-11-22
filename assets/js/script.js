document.addEventListener("DOMContentLoaded", function () {
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
            if (item.textContent.trim() === "Customer") {
                showSection(customerSection);
            }
        });
    });
});
