const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselImages = document.querySelector('.carousel-images');
const images = carouselImages.querySelectorAll('img');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = images.length - 1;
  }
  updateCarousel();
});

function updateCarousel() {
  const width = images[0].clientWidth;
  carouselImages.style.transform = `translateX(-${currentIndex * width}px)`;
}
