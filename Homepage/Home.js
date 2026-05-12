async function loadNav() {
  try {
    const cssHref = '/Components/Navigation/Nav.css';
    if (!document.querySelector(`link[href="${cssHref}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = cssHref;
      document.head.appendChild(link);
    }

    const response = await fetch('/Components/Navigation/Nav.html');
    if (!response.ok) {
      throw new Error(`Failed to load nav: ${response.status}`);
    }

    const navHtml = await response.text();
    let placeholder = document.getElementById('Bar');

    if (!placeholder) {
      placeholder = document.createElement('div');
      placeholder.id = 'Bar';
      document.body.insertAdjacentElement('afterbegin', placeholder);
    }

    placeholder.innerHTML = navHtml;
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener('DOMContentLoaded', loadNav);
console.log("hello")

