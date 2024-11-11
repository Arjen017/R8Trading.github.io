document.addEventListener("DOMContentLoaded", function() {
    // Initialize Slick carousel with fade effect
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

    // Toggle Dropdown Menu Accessibility
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const batteryDropdown = document.getElementById('batteryDropdown');

    dropdownToggle.addEventListener('click', (event) => {
        event.preventDefault();
        const expanded = dropdownToggle.getAttribute('aria-expanded') === 'true' || false;
        dropdownToggle.setAttribute('aria-expanded', !expanded);
        batteryDropdown.setAttribute('aria-hidden', expanded);
    });
});
 
