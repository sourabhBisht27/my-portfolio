document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const carouselItems = document.querySelectorAll(".carousel-item");
  const totalItems = carouselItems.length;
  let currentIndex = 0;

  function showNextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  function showPrevItem() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  document.querySelector(".next").addEventListener("click", showNextItem);
  document.querySelector(".prev").addEventListener("click", showPrevItem);

  // setInterval(showNextItem, 3000);
});
