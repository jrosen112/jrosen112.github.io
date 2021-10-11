const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<footer class="bg-light text-center text-lg-start">
            <div class="text-center p-3">
                This is my basic footer. Please update soon!
            </div>
        </footer>
        `;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);