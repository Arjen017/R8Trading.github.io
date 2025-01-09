$(document).ready(function() {
    $('.carousel-slide').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.navigation a').on('click', function(e) {
        e.preventDefault();
        const sectionId = $(this).data('section-id');
        $('.main-content > section').addClass('hidden');
        $('#' + sectionId).removeClass('hidden');
    });

    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        alert('Message sent!');
        $(this).trigger('reset');
    });
});
