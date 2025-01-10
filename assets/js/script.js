let onSlide = false;

window.addEventListener("load", () => {
   autoSlide();

   const dots = document.querySelectorAll(".carousel_dot");
   dots.forEach((dot, index) => {
      dot.addEventListener("click", () => slide(index));
   });

   const buttonPrev = document.querySelector(".carousel_button__prev");
   const buttonNext = document.querySelector(".carousel_button__next");
   buttonPrev.addEventListener("click", () => slide(getItemActiveIndex() - 1));
   buttonNext.addEventListener("click", () => slide(getItemActiveIndex() + 1));
});

function autoSlide() {
   setInterval(() => {
      if (!onSlide) {
         slide(getItemActiveIndex() + 1);
      }
   }, 3000); // slide speed = 3s
}

function slide(toIndex) {
   if (onSlide) return;
   onSlide = true;

   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");
   const itemActiveIndex = itemsArray.indexOf(itemActive);
   let newItemActive = null;

   if (toIndex >= itemsArray.length) {
      toIndex = 0;
   } else if (toIndex < 0) {
      toIndex = itemsArray.length - 1;
   }

   newItemActive = itemsArray[toIndex];

   if (toIndex > itemActiveIndex) {
      newItemActive.classList.add("carousel_item__pos_next");
      setTimeout(() => {
         newItemActive.classList.add("carousel_item__next");
         itemActive.classList.add("carousel_item__next");
      }, 20);
   } else {
      newItemActive.classList.add("carousel_item__pos_prev");
      setTimeout(() => {
         newItemActive.classList.add("carousel_item__prev");
         itemActive.classList.add("carousel_item__prev");
      }, 20);
   }

   newItemActive.addEventListener("transitionend", () => {
      itemActive.className = "carousel_item";
      newItemActive.className = "carousel_item carousel_item__active";
      onSlide = false;
   }, { once: true });

   slideIndicator(toIndex);
}

function getItemActiveIndex() {
   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");
   return itemsArray.indexOf(itemActive);
}

function slideIndicator(toIndex) {
   const dots = document.querySelectorAll(".carousel_dot");
   document.querySelector(".carousel_dot__active").classList.remove("carousel_dot__active");
   dots[toIndex].classList.add("carousel_dot__active");
}
