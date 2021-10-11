const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navigation Bar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse-navbar-collapse" id="navbaraltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#">About me</a>
                    <a class="nav-item nav-link disabled" href="#">Contact</a>
                </div>
            </div>
        </nav>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    // runs each time custom comp. inserted into DOM
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

// args: DOMString(e.g. <header-component>), component class
customElements.define('header-component', Header);