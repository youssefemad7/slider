const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
let slideInterval;

function updateSlider(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider(currentIndex);
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider(currentIndex);
}

function startAutoSlide() {
  slideInterval = setInterval(showNextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

nextBtn.addEventListener("click", () => {
  showNextSlide();
  stopAutoSlide();
  startAutoSlide();
});

prevBtn.addEventListener("click", () => {
  showPrevSlide();
  stopAutoSlide();
  startAutoSlide();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider(currentIndex);
    stopAutoSlide();
    startAutoSlide();
  });
});

slider.addEventListener("mouseover", stopAutoSlide);
slider.addEventListener("mouseout", startAutoSlide);

startAutoSlide();
