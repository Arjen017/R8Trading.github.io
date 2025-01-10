let onSlide = false;

window.addEventListener("load", () => {
   autoSlide();

   const dots = document.querySelectorAll(".carousel_dot");
   for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener("click", () => slide(i));
   }

   const buttonPrev = document.querySelector(".carousel_button__prev");
   const buttonNext = document.querySelector(".carousel_button__next");
   buttonPrev.addEventListener("click", () => slide(getItemActiveIndex() - 1));
   buttonNext.addEventListener("click", () => slide(getItemActiveIndex() + 1));
})

function autoSlide() {
   setInterval(() => {
      slide(getItemActiveIndex() + 1);
   }, 3000); // slide speed = 3s
}

function slide(toIndex) {
   if (onSlide)
      return;
   onSlide = true;

   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");
   const itemActiveIndex = itemsArray.indexOf(itemActive);
   let newItemActive = null;

   if (toIndex > itemActiveIndex) {
      // check if toIndex exceeds the number of carousel items
      if (toIndex >= itemsArray.length) {
         toIndex = 0;
      }

      newItemActive = itemsArray[toIndex];

      // start transition
      newItemActive.classList.add("carousel_item__pos_next");
      setTimeout(() => {
         newItemActive.classList.add("carousel_item__next");
         itemActive.classList.add("carousel_item__next");
      }, 20);
   } else {
      // check if toIndex exceeds the number of carousel items
      if (toIndex < 0) {
         toIndex = itemsArray.length - 1;
      }

      newItemActive = itemsArray[toIndex];

      // start transition
      newItemActive.classList.add("carousel_item__pos_prev");
      setTimeout(() => {
         newItemActive.classList.add("carousel_item__prev");
         itemActive.classList.add("carousel_item__prev");
      }, 20);
   }

   // remove all transition class and switch active class
   newItemActive.addEventListener("transitionend", () => {
      itemActive.className = "carousel_item";
      newItemActive.className = "carousel_item carousel_item__active";
      onSlide = false;
   }, {
      once: true
   });

   slideIndicator(toIndex);
}

function getItemActiveIndex() {
   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");
   const itemActiveIndex = itemsArray.indexOf(itemActive);
   return itemActiveIndex;
}

function slideIndicator(toIndex) {
   const dots = document.querySelectorAll(".carousel_dot");
   const dotActive = document.querySelector(".carousel_dot__active");
   const newDotActive = dots[toIndex];

   dotActive.classList.remove("carousel_dot__active");
   newDotActive.classList.add("carousel_dot__active");
}

$(document).ready(function() {
    // Show the initial section
   // $('#carouselSection').removeClass('hidden').show();

  //  $('.carousel-slide').slick({
     //   dots: true, // Enables navigation dots below the carousel
      //  infinite: true, // Infinite loop of slides
     //   speed: 500, // Slide transition speed
      //  fade: false, // Fade effect for slides
      //  cssEase: 'linear', // CSS transition effect
      //  arrows: true, // Adds navigation arrows
      //  autoplay: true, // Enables autoplay
      //  autoplaySpeed: 3000, // Autoplay speed in milliseconds
 //   });

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
