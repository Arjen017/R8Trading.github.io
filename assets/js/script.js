document.addEventListener("DOMContentLoaded", function() {
    const mapLink = document.getElementById("mapLink");
    const carouselSection = document.getElementById("carouselSection");
    const mapSection = document.getElementById("mapSection");
    
    mapLink.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Map link clicked");

    // Hide carousel and show map
    carouselSection.classList.add("hidden");
    mapSection.classList.add("show");
    });
});
