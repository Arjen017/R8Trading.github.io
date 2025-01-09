$(document).ready(function() {
    // Initialize the carousel
    $('.carousel-slide').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    // Handle navigation link clicks
    $('.navigation a').on('click', function(e) {
    e.preventDefault();
    console.log('Navigation link clicked'); // Debugging line
    const sectionId = $(this).data('section-id');
    $('.main-content > section').addClass('hidden');
    $('#' + sectionId).removeClass('hidden');
});
    // Handle dropdown item clicks
    $('.dropdown-item a').on('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        const sectionId = $(this).data('section-id'); // Get the target section ID
        $('.main-content > section').addClass('hidden'); // Hide all sections
        $('#' + sectionId).removeClass('hidden'); // Show the target section
        closeAllDropdowns(); // Close dropdowns after selection
    });

    // Close all dropdowns when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.dropdown').length) {
            closeAllDropdowns();
        }
    });

    // Function to close all dropdowns
    function closeAllDropdowns() {
        $('.dropdown-menu').hide(); // Hide all dropdown menus
    }

    // Handle contact form submission
    $('#contactForm').on('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        alert('Message sent!'); // Show alert
        $(this).trigger('reset'); // Reset the form
    });
});
