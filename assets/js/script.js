document.addEventListener('DOMContentLoaded', function () {
    let onSlide = false;
    let slideInterval;

    const slides = document.querySelectorAll('.carousel_item');
    const dots = document.querySelectorAll('.carousel_dot');
    const buttonPrev = document.querySelector('.carousel_button__prev');
    const buttonNext = document.querySelector('.carousel_button__next');
    const navLinks = document.querySelectorAll('.navigation a');
    const sections = {
        homeLink: "carouselSection",
        mapLink: "mapSection",
        contactLink: "contactSection",
        batteryCarsLink: "batteryCarsSection",
        batteryMotorcycleLink: "batteryMotorcycleSection",
        customerLink: "customerSection",
        eventsLink: "eventsSection"
    };

    Object.keys(sections).forEach(linkId => {
        const sectionId = sections[linkId];
        const link = document.getElementById(linkId);
        const section = document.getElementById(sectionId);

        if (link) {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                hideAllSections();
                section.style.display = "block";
                updateActiveLink(this);
            });
        }
    });

    function hideAllSections() {
        Object.values(sections).forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.style.display = "none";
            }
        });
    }

    function updateActiveLink(activeLink) {
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }

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
        }, 5000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    function slide(toIndex) {
        if (onSlide) return;
        onSlide = true;

        const itemsArray = Array.from(slides);
        const itemActive = document.querySelector('.carousel_item__active');
        let newItemActive = itemsArray[toIndex % itemsArray.length];

        const direction = toIndex > getItemActiveIndex() ? 'next' : 'prev';

        newItemActive.classList.add(`carousel_item__pos_${direction}`);
        setTimeout(() => {
            newItemActive.classList.add(`carousel_item__${direction}`);
            itemActive.classList.add(`carousel_item__${direction}`);
        }, 20);

        newItemActive.addEventListener('transitionend', () => {
            itemActive.className = 'carousel_item';
            newItemActive.className = 'carousel_item carousel_item__active';
            onSlide = false;
        }, { once: true });

        slideIndicator(toIndex);
    }

    function slideIndicator(toIndex) {
        document.querySelector('.carousel_dot__active').classList.remove('carousel_dot__active');
        dots[toIndex % dots.length].classList.add('carousel_dot__active');
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            slide(index);
            startAutoSlide();
        });
    });

    buttonPrev.addEventListener('click', debounce(() => {
        stopAutoSlide();
        slide(getItemActiveIndex() - 1);
        startAutoSlide();
    }, 300));

    buttonNext.addEventListener('click', debounce(() => {
        stopAutoSlide();
        slide(getItemActiveIndex() + 1);
        startAutoSlide();
    }, 300));

    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }

    startAutoSlide();
});
