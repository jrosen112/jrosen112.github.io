const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
    <link rel="stylesheet" type="text/css" href="stylesheets/header_style.css" />
    <header>
        <nav>
            <ul>
                <li><a href="#bottom">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
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