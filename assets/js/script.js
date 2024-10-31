document.addEventListener("DOMContentLoaded", function() {
    // Carousel functionality
    const carouselSlide = document.querySelector(".carousel-slide");
    const images = document.querySelectorAll(".carousel-slide img");

    let counter = 0;

    function carousel() {
        counter++;
        if (counter >= images.length) {
            counter = 0;
        }
        carouselSlide.style.transform = `translateX(${-counter * 350}px)`;
    }

    setInterval(carousel, 3000); // Change slide every 3 seconds

    // Function to show dropdown on hover and keep it visible for 5 seconds
let dropdownTimeout;

function showDropdown() {
    clearTimeout(dropdownTimeout);
    document.getElementById("batteryDropdown").style.display = "block";
}

function hideDropdown() {
    dropdownTimeout = setTimeout(function() {
        document.getElementById("batteryDropdown").style.display = "none";
    }, 5000);
}
// Delay in milliseconds (5 seconds)
    };
});

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

