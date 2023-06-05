class Slider extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });

    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
            
        </style>
        
      `;
    }
    connectedCallback() {
      this.render();
    }
  
    disconnectedCallback() {
    }
  
  
  }
  
  customElements.define("slider-component", Slider);
  
 