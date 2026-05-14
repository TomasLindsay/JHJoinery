class Gallery {
  constructor(section) {
    this.section = section;
    this.slides = section.querySelectorAll(".mySlides");
    this.dots = section.querySelectorAll(".demo");
    this.caption = section.querySelector("#caption");

    this.slideIndex = 0;

    this.showSlide(this.slideIndex);

    // Add click events to thumbnails
    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        this.showSlide(index);
      });
    });
  }

  showSlide(index) {

    // Loop slides
    if (index >= this.slides.length) {
      this.slideIndex = 0;
    } else if (index < 0) {
      this.slideIndex = this.slides.length - 1;
    } else {
      this.slideIndex = index;
    }

    // Hide all slides
    this.slides.forEach(slide => {
      slide.style.display = "none";
    });

    // Remove active class
    this.dots.forEach(dot => {
      dot.classList.remove("active");
    });

    // Show current slide
    this.slides[this.slideIndex].style.display = "block";

    // Activate thumbnail
    this.dots[this.slideIndex].classList.add("active");

    // Update caption
    if (this.caption) {
      this.caption.textContent =
        this.dots[this.slideIndex].alt;
    }
  }
}

// Initialize ALL sections independently
document.querySelectorAll(".Section").forEach(section => {
  new Gallery(section);
});