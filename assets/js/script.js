document.addEventListener('DOMContentLoaded', function () {
    let onSlide = false;
    let slideInterval;
    
    const slides = document.querySelectorAll('.carousel_item');
    const dots = document.querySelectorAll('.carousel_dot');
    const buttonPrev = document.querySelector('.carousel_button__prev');
    const buttonNext = document.querySelector('.carousel_button__next');

    function autoSlide() {
        const activeIndex = getItemActiveIndex();
        const nextIndex = (activeIndex + 1) % slides.length;
        slide(nextIndex);
    }

    function getItemActiveIndex() {
        const itemsArray = Array.from(slides);
        const itemActive = document.querySelector('.carousel_item__active');
        return itemsArray.indexOf(itemActive);
    }

    function startAutoSlide() {
        slideInterval = setInterval(() => {
            if (!onSlide) {
                autoSlide();
            }
        }, 5000); // 5-second interval
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    function slide(toIndex) {
        if (onSlide) return;
        onSlide = true;

        const itemsArray = Array.from(slides);
        const itemActive = document.querySelector('.carousel_item__active');
        let newItemActive = null;

        if (toIndex >= itemsArray.length) toIndex = 0;
        else if (toIndex < 0) toIndex = itemsArray.length - 1;

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

    function slideIndicator(toIndex) {
        const dots = document.querySelectorAll('.carousel_dot');
        document.querySelector('.carousel_dot__active').classList.remove('carousel_dot__active');
        dots[toIndex].classList.add('carousel_dot__active');
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            slide(index);
            startAutoSlide();
        });
    });

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

    startAutoSlide();
});
