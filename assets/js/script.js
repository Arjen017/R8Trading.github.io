document.addEventListener("DOMContentLoaded", function() {
    // Dropdown menu functionality
    const dropdown = document.querySelector('.dropdown');
    const batteryDropdown = document.getElementById('batteryDropdown');

    // Show dropdown menu on hover
    dropdown.addEventListener('mouseenter', function() {
        batteryDropdown.classList.add('show');
    });

    // Hide dropdown menu when the mouse leaves both the dropdown and menu
    dropdown.addEventListener('mouseleave', function() {
        setTimeout(() => {
            if (!dropdown.matches(':hover') && !batteryDropdown.matches(':hover')) {
                batteryDropdown.classList.remove('show');
            }
        }, 100); // Small delay to prevent quick disappearance
    });

    batteryDropdown.addEventListener('mouseleave', function() {
        setTimeout(() => {
            if (!dropdown.matches(':hover') && !batteryDropdown.matches(':hover')) {
                batteryDropdown.classList.remove('show');
            }
        }, 100);
    });

    // Initialize Slick carousel with fade effect for single image display
    $('.carousel-slide').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000
    });
});
