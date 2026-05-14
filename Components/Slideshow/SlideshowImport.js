async function loadSlideshow() {
    try {
        // 1. Inject the CSS first
        const cssHref = '/Components/Slideshow/Slideshow.css';
        if (!document.querySelector(`link[href="${cssHref}"]`)) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = cssHref;
            document.head.appendChild(link);
        }

        // 2. Fetch the HTML content
        const response = await fetch('/Components/Slideshow/Slideshow.html');
        if (!response.ok) throw new Error(`Failed to load slideshow HTML: ${response.status}`);
        const slideshowHtml = await response.text();

        // 3. Find your placeholder div and inject the HTML
        const placeholder = document.getElementById('slideshow-placeholder');
        if (placeholder) {
            placeholder.innerHTML = slideshowHtml;

            // 4. NOW inject the JS logic so it can find the HTML elements it needs
            const scriptSrc = '/Components/Slideshow/Slideshow.js';
            if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
                const script = document.createElement('script');
                script.src = scriptSrc;
                script.defer = true; // Ensures it executes after parsing
                document.body.appendChild(script);
            }
        }
    } catch (error) {
        console.error("Slideshow Import Error:", error);
    }
}

// Execute the function
loadSlideshow();