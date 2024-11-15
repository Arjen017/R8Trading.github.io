document.addEventListener("DOMContentLoaded", function() {
    const mapLink = document.getElementById("mapLink");
    const carouselSection = document.getElementById("carouselSection");
    const mapSection = document.getElementById("mapSection");

    mapLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Debugging logs
        console.log("Map link clicked");

        // Toggle visibility
        carouselSection.style.display = "none";
        mapSection.style.display = "block";
    });
});
