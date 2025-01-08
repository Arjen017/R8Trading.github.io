$(document).ready(function() {
    // Initialize slick carousel
    $('.carousel-slide').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    // Navigation setup
    $('.navigation a, .dropdown-item a').on('click', function(e) {
        e.preventDefault();
        const sectionId = $(this).data('section-id');
        showSection(sectionId);
    });

    // Dropdown toggle
    $('.dropdown-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).next('.dropdown-menu').toggleClass('show');
    });

    // Close dropdowns when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.dropdown').length) {
            $('.dropdown-menu').removeClass('show');
        }
    });

    function showSection(sectionId) {
        $('section').hide();
        $('#' + sectionId).show();
    }
});
