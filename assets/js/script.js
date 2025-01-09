$(document).ready(function() {
    // Show the initial section
    $('#carouselSection').removeClass('hidden').show();

    // Function to hide all sections and show the selected one
    function showSection(sectionId) {
        $('.main-content > section').hide(); // Hide all sections
        $('#' + sectionId).show(); // Show the selected section
    }

    // Navigation link click event
    $('.navigation a').on('click', function(e) {
        e.preventDefault();
        const sectionId = $(this).data('section-id');
        showSection(sectionId);
    });

    // Dropdown item click event
    $('.dropdown-item a').on('click', function(e) {
        e.preventDefault();
        const sectionId = $(this).data('section-id');
        showSection(sectionId);
        closeAllDropdowns();
    });

    // Function to close all dropdowns
    function closeAllDropdowns() {
        $('.dropdown-menu').hide();
    }

    // Close all dropdowns on click outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.dropdown').length) {
            closeAllDropdowns();
        }
    });

    // Contact form submission event
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        alert('Message sent!');
        $(this).trigger('reset');
    });

    // Dropdown toggle functionality
    $('.dropdown-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).next('.dropdown-menu').toggle(); // Toggle the dropdown visibility
    });
});
