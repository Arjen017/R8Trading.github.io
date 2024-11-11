document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector('.dropdown');
    const batteryDropdown = document.getElementById('batteryDropdown');
    let dropdownOpen = false;

    // Show dropdown menu on hover of the dropdown
    dropdown.addEventListener('mouseenter', function() {
        batteryDropdown.classList.add('show');
        dropdownOpen = true;
    });

    // Hide dropdown menu only when the mouse leaves both the dropdown and the menu itself
    dropdown.addEventListener('mouseleave', function() {
        setTimeout(() => {
            if (!dropdown.matches(':hover') && !batteryDropdown.matches(':hover')) {
                batteryDropdown.classList.remove('show');
                dropdownOpen = false;
            }
        }, 100); // Add a slight delay to ensure the menu doesn't disappear too quickly
    });

    batteryDropdown.addEventListener('mouseleave', function() {
        setTimeout(() => {
            if (!dropdown.matches(':hover') && !batteryDropdown.matches(':hover')) {
                batteryDropdown.classList.remove('show');
                dropdownOpen = false;
            }
        }, 100);
    });
