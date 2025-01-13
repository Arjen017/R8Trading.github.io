let onSlide = false;
let slideInterval;

document.addEventListener('DOMContentLoaded', function () {
    startAutoSlide(); // Ensure this is called


    // Function to slide the carousel automatically
    function autoSlide() {
        const activeIndex = getItemActiveIndex();
        const nextIndex = (activeIndex + 1) % document.querySelectorAll('.carousel_item').length;
        slide(nextIndex);
    }

    // Function to get the index of the currently active item
    function getItemActiveIndex() {
        const itemsArray = Array.from(document.querySelectorAll('.carousel_item'));
        const itemActive = document.querySelector('.carousel_item__active');
        return itemsArray.indexOf(itemActive);
    }

    // Function to initiate the auto-slide with an interval
    function startAutoSlide() {
        slideInterval = setInterval(() => {
            if (!onSlide) {
                autoSlide();
            }
        }, 5000); // 5-second interval
    }

    // Function to stop the auto-slide
    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Function to handle the slide transition
    function slide(toIndex) {
        if (onSlide) {
            return;
        }
        onSlide = true;

        const itemsArray = Array.from(document.querySelectorAll('.carousel_item'));
        const itemActive = document.querySelector('.carousel_item__active');
        let newItemActive = null;

        if (toIndex >= itemsArray.length) {
            toIndex = 0;
        } else if (toIndex < 0) {
            toIndex = itemsArray.length - 1;
        }

        newItemActive = itemsArray[toIndex];

        if (toIndex > getItemActiveIndex()) {
            newItemActive.classList.add('carousel_item__pos_next');
            setTimeout(() => {
                newItemActive.classList.add('carousel_item__next');
                itemActive.classList.add('carousel_item__next');
            }, 20);
        } else {
            newItemActive.classList.add('carousel_item__pos_prev');
            setTimeout(() => {
                newItemActive.classList.add('carousel_item__prev');
                itemActive.classList.add('carousel_item__prev');
            }, 20);
        }

        newItemActive.addEventListener('transitionend', () => {
            itemActive.className = 'carousel_item';
            newItemActive.className = 'carousel_item carousel_item__active';
            onSlide = false;
        }, { once: true });

        slideIndicator(toIndex);
    }

    // Function to update the carousel indicators
    function slideIndicator(toIndex) {
        const dots = document.querySelectorAll('.carousel_dot');
        document.querySelector('.carousel_dot__active').classList.remove('carousel_dot__active');
        dots[toIndex].classList.add('carousel_dot__active');
    }

    startAutoSlide();

    const dots = document.querySelectorAll('.carousel_dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            slide(index);
            startAutoSlide();
        });
    });

    const buttonPrev = document.querySelector('.carousel_button__prev');
    const buttonNext = document.querySelector('.carousel_button__next');

    console.log(buttonPrev, buttonNext); // Debugging log

    buttonPrev.addEventListener('click', () => {
        console.log('Prev button clicked'); // Debugging log
        stopAutoSlide();
        slide(getItemActiveIndex() - 1);
        startAutoSlide();
    });

    buttonNext.addEventListener('click', () => {
        console.log('Next button clicked'); // Debugging log
        stopAutoSlide();
        slide(getItemActiveIndex() + 1);
        startAutoSlide();
    });
});
