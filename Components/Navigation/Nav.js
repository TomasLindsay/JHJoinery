// SIMPLIFIED VERSION (No Shadow DOM isolation)
class NavigationComponent extends HTMLElement {
  async connectedCallback() {
    const config = {
      html: '/Components/Navigation/Nav.html',
      css:  '/Components/Navigation/Nav.css',
      js:   '/Components/Navigation/Nav.js'
    };

    try {
      const [html, css] = await Promise.all([
        fetch(config.html).then(res => res.text()),
        fetch(config.css).then(res => res.text())
      ]);

      // Injecting directly into 'this' instead of shadow root
      this.innerHTML = `<style>${css}</style>${html}`;

      const script = document.createElement('script');
      script.src = config.js;
      this.appendChild(script);

    } catch (err) {
      console.error("Error:", err);
    }
  }
}
customElements.define('navigation-component', NavigationComponent);
