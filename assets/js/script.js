document.addEventListener("DOMContentLoaded", () => {
  let onSlide = false
  let slideInterval

  const carousel = document.querySelector(".carousel")
  const slides = carousel.querySelectorAll(".carousel_item")
  const dots = carousel.querySelectorAll(".carousel_dot")
  const buttonPrev = carousel.querySelector(".carousel_button__prev")
  const buttonNext = carousel.querySelector(".carousel_button__next")

  const sections = {
    homeLink: "carouselSection",
    mapLink: "mapSection",
    contactLink: "contactSection",
    batteryCarsLink: "batteryCarsSection",
    batteryMotorcycleLink: "batteryMotorcycleSection",
    customerLink: "customerSection",
    eventsLink: "eventsSection",
  }

  Object.keys(sections).forEach((linkId) => {
    const sectionId = sections[linkId]
    const link = document.getElementById(linkId) || document.querySelector(`[data-section-id="${sectionId}"]`)
    const section = document.getElementById(sectionId)

    if (link && section) {
      link.addEventListener("click", (event) => {
        event.preventDefault()
        hideAllSections()
        section.style.display = "block"
      })
    }
  })

  function hideAllSections() {
    Object.values(sections).forEach((sectionId) => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.style.display = "none"
      }
    })
  }

  function getItemActiveIndex() {
    return Array.from(slides).findIndex((slide) => slide.classList.contains("carousel_item__active"))
  }

  function slide(toIndex) {
    if (onSlide) return
    onSlide = true

    const itemActive = carousel.querySelector(".carousel_item__active")
    const itemActiveIndex = getItemActiveIndex()

    if (toIndex >= slides.length) toIndex = 0
    else if (toIndex < 0) toIndex = slides.length - 1

    const newItemActive = slides[toIndex]

    if (toIndex > itemActiveIndex) {
      newItemActive.classList.add("carousel_item__pos_next")
      setTimeout(() => {
        newItemActive.classList.add("carousel_item__next")
        itemActive.classList.add("carousel_item__next")
      }, 20)
    } else {
      newItemActive.classList.add("carousel_item__pos_prev")
      setTimeout(() => {
        newItemActive.classList.add("carousel_item__prev")
        itemActive.classList.add("carousel_item__prev")
      }, 20)
    }

    newItemActive.addEventListener(
      "transitionend",
      () => {
        itemActive.className = "carousel_item"
        newItemActive.className = "carousel_item carousel_item__active"
        onSlide = false
      },
      { once: true },
    )

    slideIndicator(toIndex)
  }

  function slideIndicator(toIndex) {
    carousel.querySelector(".carousel_dot__active").classList.remove("carousel_dot__active")
    dots[toIndex].classList.add("carousel_dot__active")
  }

  function autoSlide() {
    const activeIndex = getItemActiveIndex()
    const nextIndex = (activeIndex + 1) % slides.length
    slide(nextIndex)
  }

  function startAutoSlide() {
    slideInterval = setInterval(() => {
      if (!onSlide) {
        autoSlide()
      }
    }, 5000) // 5-second interval
  }

  function stopAutoSlide() {
    clearInterval(slideInterval)
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopAutoSlide()
      slide(index)
      startAutoSlide()
    })
  })

  buttonPrev.addEventListener("click", () => {
    stopAutoSlide()
    slide(getItemActiveIndex() - 1)
    startAutoSlide()
  })

  buttonNext.addEventListener("click", () => {
    stopAutoSlide()
    slide(getItemActiveIndex() + 1)
    startAutoSlide()
  })

  startAutoSlide()

  // Show home section by default
  document.getElementById("carouselSection").style.display = "block"
})

