// const headerTemplate = document.createElement('template');
// headerTemplate.innerHTML = `
//     <link rel="stylesheet" type="text/css" href="stylesheets/header_style.css" />
//     <header>
//         <nav>
//             <div class="nav-wrapper">
//                 <div id="nav-name">
//                     <p id="p-nav-name" style="color: white">jared rosen<span></span></p>
//                 </div>
//                 <div>
//                     <ul>
//                         <li><a href="#bottom">/about</a></li>
//                         <li><a href="#">/work</a></li>
//                         <li><a href="#">/contact</a></li>
//                     </ul>
//                 </div>
//                 <div>
//                 <p style="opacity: 0%; widht:0px">Jared Rosen</p>
//                 </div>
//             </div>
//         </nav>
//     </header>
// `;

// {/* <div class="flex nav-name">Jared Rosen</div>
//             <ul>
//                 <li><a href="#bottom">About</a></li>
//                 <li><a href="#">Work</a></li>
//                 <li><a href="#">Contact</a></li>
//             </ul> */}

// class Header extends HTMLElement {
//     constructor() {
//         super();
//     }

//     // runs each time custom comp. inserted into DOM
//     connectedCallback() {
//         const shadowRoot = this.attachShadow({ mode: 'open' });
//         shadowRoot.appendChild(headerTemplate.content);
//     }
// }

// // args: DOMString(e.g. <header-component>), component class
// customElements.define('header-component', Header);
// $(function() {
//     $("#header").load("header.html");
//     $("#header").load("./stylesheets/header_style.css");
// });