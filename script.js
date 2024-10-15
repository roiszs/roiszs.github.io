document.querySelectorAll('.portfolio-section').forEach((section) => {
  const prevBtn = section.querySelector('.prev-btn');
  const nextBtn = section.querySelector('.next-btn');
  const carouselImages = section.querySelector('.carousel-images');
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
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
