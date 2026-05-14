  const slides = [
  '/Images/Slideshow/SlideshowImg1.jpg',
  '/Images/Slideshow/SlideshowImg2.jpg',
  '/Images/Slideshow/SlideshowImg3.jpg',

];

const slideImage = document.getElementById('slideImage');
let currentIndex = 0;
let currentSlide;
let nextSlide;

function wrapImageForAnimation(image) {
  const wrapper = document.createElement('div');
  wrapper.style.position = 'relative';
  wrapper.style.overflow = 'hidden';
  wrapper.style.width = '100%';
  wrapper.style.height = '100%';
  wrapper.style.display = 'block';

  image.parentNode.replaceChild(wrapper, image);
  wrapper.appendChild(image);
  return wrapper;

 

}

function setupImageStyle(image, visible) {
  image.style.position = 'absolute';
  image.style.top = '0';
  image.style.left = '0';
  image.style.width = '100%';
  image.style.height = '600px';
  image.style.objectFit = 'cover';
  image.style.transition = 'transform 0.8s ease';
  image.style.transform = visible ? 'translateX(0)' : 'translateX(100%)';
}

console.log("Slideshow script loaded");

if (slideImage) {
  const wrapper = wrapImageForAnimation(slideImage);
  const secondSlide = slideImage.cloneNode();
  secondSlide.removeAttribute('id');
  wrapper.appendChild(secondSlide);

  currentSlide = slideImage;
  nextSlide = secondSlide;

  setupImageStyle(currentSlide, true);
  setupImageStyle(nextSlide, false);

  currentSlide.src = slides[currentIndex];
  currentSlide.alt = `Slide ${currentIndex + 1}`;
}

function showSlide(index) {
  if (!currentSlide || !nextSlide) return;

  nextSlide.src = slides[index];
  nextSlide.alt = `Slide ${index + 1}`;
  nextSlide.style.transform = 'translateX(100%)';
  nextSlide.getBoundingClientRect();

  currentSlide.style.transform = 'translateX(-100%)';
  nextSlide.style.transform = 'translateX(0)';

 setTimeout(() => {

    const temp = currentSlide;
    currentSlide = nextSlide;
    nextSlide = temp;

    nextSlide.style.visibility = 'hidden';
    nextSlide.style.transition = 'none';

  
    nextSlide.style.transform = 'translateX(100%)';

    // force repaint
    void nextSlide.offsetWidth;

    nextSlide.style.visibility = 'visible';
    nextSlide.style.transition = 'transform 0.8s ease';

}, 800);
}
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 3000);

