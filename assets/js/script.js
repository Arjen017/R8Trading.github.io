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
});
