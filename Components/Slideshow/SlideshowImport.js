async function loadSlideshow() {
  try {
    const cssHref = '/Components/Slideshow/Slideshow.css';
    if (!document.querySelector(`link[href="${cssHref}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = cssHref;
      document.head.appendChild(link);
    }

    const scriptSrc = '/Components/Slideshow/Slideshow.js';
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.defer = true;
      document.body.appendChild(script);
    }

    const response = await fetch('/Components/Slideshow/Slideshow.html');
    if (!response.ok) {
      throw new Error(`Failed to load slideshow: ${response.status}`);
    }

    const slideshowHtml = await response.text();
    let placeholder = document.getElementById('slideshow');

    if (!placeholder) {
      placeholder = document.createElement('div');
      placeholder.id = 'slideshow';
      document.body.insertAdjacentElement('afterbegin', placeholder);
    }

    placeholder.innerHTML = slideshowHtml;
  } catch (error) {
    console.error(error);
  }
}



function initSlideshow() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSlideshow);
  } else {
    loadSlideshow();
  }
}

initSlideshow();
console.log("Slideshow loaded");