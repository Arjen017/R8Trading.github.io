document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector('.dropdown');
    const batteryDropdown = document.getElementById('batteryDropdown');
    
    // Handle Dropdown Hover
    dropdown.addEventListener('mouseenter', function() {
        batteryDropdown.classList.add('show');
    });

    dropdown.addEventListener('mouseleave', function() {
        setTimeout(() => {
            if (!dropdown.matches(':hover') && !batteryDropdown.matches(':hover')) {
                batteryDropdown.classList.remove('show');
            }
        }, 100);
    });

    batteryDropdown.addEventListener('mouseleave', function() {
        setTimeout(() => {
            if (!dropdown.matches(':hover') && !batteryDropdown.matches(':hover')) {
                batteryDropdown.classList.remove('show');
            }
        }, 100);
    });

    // Slick Carousel Initialization
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });
});
