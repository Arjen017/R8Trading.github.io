document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.getElementById("homeLink");
    const galleryLink = document.getElementById("galleryLink");
    const mapLink = document.getElementById("mapLink");

    const carouselSection = document.getElementById("carouselSection");
    const contentSection = document.getElementById("contentSection");

    /**
     * Show the specified section and hide all others.
     * @param {HTMLElement} sectionToShow - The section to be made visible.
     */
    function showSection(sectionToShow) {
        document.querySelectorAll(".section").forEach((section) => {
            section.classList.add("hidden");
            section.classList.remove("visible");
        });
        sectionToShow.classList.add("visible");
        sectionToShow.classList.remove("hidden");
    }

    // Event listener for "Home" link
    homeLink.addEventListener("click", function (event) {
        event.preventDefault();
        showSection(carouselSection);
    });

    // Event listener for "Map" link
    mapLink.addEventListener("click", function (event) {
        event.preventDefault();
        showSection(contentSection);
    });

    // Placeholder: Add logic for "Gallery" link when needed
    galleryLink.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Gallery link clicked - Add gallery logic here.");
    });
});
