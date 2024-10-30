document.addEventListener("DOMContentLoaded", function() {
    // Carousel functionality
    const carouselSlide = document.querySelector(".carousel-slide");
    const images = document.querySelectorAll(".carousel-slide img");

    let counter = 0;

    function carousel() {
        counter++;
        if (counter >= images.length) {
            counter = 0;
        }
        carouselSlide.style.transform = `translateX(${-counter * 350}px)`;
    }

    setInterval(carousel, 3000); // Change slide every 3 seconds

    // Dropdown functionality
    let dropdownTimeout;

    // Function to show the dropdown immediately
    window.showDropdown = function() {
        clearTimeout(dropdownTimeout); // Clear any existing timeout
        document.getElementById("batteryDropdown").style.display = "block";
    };

    // Function to hide the dropdown after a 5-second delay
    window.hideDropdown = function() {
        dropdownTimeout = setTimeout(function() {
            document.getElementById("batteryDropdown").style.display = "none";
        }, 5000); // Delay in milliseconds (5 seconds)
    };
});
