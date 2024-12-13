document.addEventListener("DOMContentLoaded", function () {
    const mapLink = document.getElementById("mapLink");
    const carouselSection = document.getElementById("carouselSection");
    const contentSection = document.getElementById("contentSection"); // map section
    const homeLink = document.getElementById("homeLink");

    function toggleDropdown(event) {
    event.preventDefault();
    const dropdownMenu = event.target.nextElementSibling;
    if (dropdownMenu) {
        dropdownMenu.classList.toggle("hidden");
    }
    }

    // Home link click event
    homeLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        console.log("Home link clicked");

        // Show carousel and hide map
        carouselSection.style.display = "block";
        contentSection.style.display = "none"; // Corrected
    });

    // Map link click event
    mapLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        console.log("Map link clicked");

        // Hide carousel and show map
        carouselSection.style.display = "none";
        contentSection.style.display = "block"; // Corrected
    });

    
});
