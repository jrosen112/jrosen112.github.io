const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
    <link rel="stylesheet" type="text/css" href="stylesheets/footer_style.css" />
    <footer>
        <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Back to Top</a></li>
        </ul>
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