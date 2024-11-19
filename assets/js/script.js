document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.getElementById("homeLink");
    const mapLink = document.getElementById("mapLink");
    const carouselSection = document.getElementById("carouselSection");
    const contentSection = document.getElementById("contentSection");

    function showSection(sectionToShow) {
        document.querySelectorAll(".section").forEach(section => {
            section.classList.add("hidden");
            section.classList.remove("visible");
        });
        sectionToShow.classList.add("visible");
        sectionToShow.classList.remove("hidden");
    }

    homeLink.addEventListener("click", function (event) {
        event.preventDefault();
        showSection(carouselSection);
    });

    mapLink.addEventListener("click", function (event) {
        event.preventDefault();
        showSection(contentSection);
    });
});
