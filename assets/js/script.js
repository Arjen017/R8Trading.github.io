<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Get elements
        const dropdown = document.querySelector('.dropdown');
        const batteryDropdown = document.getElementById('batteryDropdown');
        const navigation = document.querySelector('.navigation');
        
        // Map and Carousel toggle elements
        const mapLink = document.querySelector('.navigation a[href="#map"]');
        const carouselSection = document.getElementById("carouselSection");
        const mapSection = document.getElementById("mapSection");

        // Show dropdown menu when hovering over navigation
        navigation.addEventListener('mouseenter', function() {
            batteryDropdown.classList.add('show');
        });

        navigation.addEventListener('mouseleave', function() {
            batteryDropdown.classList.remove('show');
        });

        // Carousel functionality
        const carouselSlide = document.querySelector(".carousel-slide");
        const images = document.querySelectorAll(".carousel-slide img");
        let counter = 0;
        const slideWidth = images[0].clientWidth;

        function showSlide() {
            carouselSlide.style.transform = `translateX(${-counter * slideWidth}px)`;
        }

        function nextSlide() {
            counter = (counter + 1) % images.length;
            showSlide();
        }

        function prevSlide() {
            counter = (counter - 1 + images.length) % images.length;
            showSlide();
        }

        setInterval(nextSlide, 3000);

        window.addEventListener("resize", () => {
            showSlide();
        });

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

        // Show map and hide carousel when "Map" link is clicked
        mapLink.addEventListener("click", function(event) {
            event.preventDefault();
            carouselSection.style.display = "none";
            mapSection.style.display = "block";
        });
    });
</script>
