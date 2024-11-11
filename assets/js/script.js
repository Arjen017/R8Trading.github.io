document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown");
    const batteryDropdown = document.getElementById("batteryDropdown");
    let dropdownOpen = false;

    dropdown.addEventListener("mouseenter", function() {
        batteryDropdown.classList.add("show");
        dropdownOpen = true;
    });

    dropdown.addEventListener("mouseleave", function() {
        batteryDropdown.classList.remove("show");
        dropdownOpen = false;
    });

    document.addEventListener("click", function(event) {
        if (!dropdown.contains(event.target) && dropdownOpen) {
            batteryDropdown.classList.remove("show");
            dropdownOpen = false;
        }
    });
});
