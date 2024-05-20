const slider = document.querySelector('.slider');
const sliderContent = document.querySelector('.slider-content');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  if (currentIndex < 6) {
    currentIndex++;
    sliderContent.style.transform = `translateX(-${currentIndex * 93}%)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    sliderContent.style.transform = `translateX(-${currentIndex * 93}%)`;
  }
});
const slider1 = document.querySelector('.slider1');
const sliderContent1 = document.querySelector('.slider-content1');
const prevBtn1 = document.querySelector('.prev1');
const nextBtn1 = document.querySelector('.next1');
let currentIndex1 = 0;

nextBtn1.addEventListener('click', () => {
  if (currentIndex1 < 10) {
    currentIndex1++;
    sliderContent1.style.transform = `translateX(-${currentIndex1 * 100}%)`;
  }
});

prevBtn1.addEventListener('click', () => {
  if (currentIndex1 > 0) {
    currentIndex1--;
    sliderContent1.style.transform = `translateX(-${currentIndex1 * 100}%)`;
  }
});