let currentSlide = 0;

function showSlide(slideIndex) {
  const slider = document.getElementById('slider');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;


  if (slideIndex >= totalSlides) {
    currentSlide = 0;
  } else if (slideIndex < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = slideIndex;
  }

  slider.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

