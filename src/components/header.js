class Header extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });

    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
            #header{
                width:100%;
            }
            .header-menu ul{
                display:flex;
                width:100%;
                justify-content:center;
                border-bottom:1px solid black;
                list-style:none;
            }
        </style>
        <header id="header">
            <div class="header-menu">
                <ul>
                    <li>Inicio</li>
                    <li>Carta</li>
                    <li>Contacto</li>
                    <li>Info</li>
                </ul>
            </div>
        </header>
      `;
    }
    connectedCallback() {
      this.render();
    }
  
    disconnectedCallback() {
    }
  
  
  }
  
  customElements.define("header-component", Header);
  
 