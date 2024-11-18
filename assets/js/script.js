document.addEventListener("DOMContentLoaded", function () {
    const mapLink = document.getElementById("mapLink");
    const carouselSection = document.getElementById("carouselSection");
    const mapSection = document.getElementById("mapSection");
    const homeLink = document.getElementById("homeLink");

    // Home link click event
    homeLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        console.log("Home link clicked");

        // Show carousel and hide map
        carouselSection.style.display = "block";
        mapSection.style.display = "none";
    });

    // Map link click event
    mapLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        console.log("Map link clicked");

        // Hide carousel and show map
        carouselSection.style.display = "none";
        mapSection.style.display = "block";
    });
});
