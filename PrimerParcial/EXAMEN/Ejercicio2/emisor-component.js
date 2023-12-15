class EmisorComponent extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const button = document.createElement('button');
      button.textContent = 'Dar clic';
      
      // Agregar estilos al Shadow DOM
      const style = document.createElement('style');
      style.textContent = `
      .button {
        padding: 15px 30px;
        background-color: #25ac478c;
        color: #fff;
        border: none;
        cursor: pointer;
        font-size: 1.2em;
        transition: background-color 0.3s ease;
        border-radius: 30px;
        text-transform: uppercase;
      }
  
      .button:hover {
        background-color: #0c5e2e;
      }
      `;
  
      button.addEventListener('click', () => {
        const customEvent = new CustomEvent('actualizar-mensaje', { detail: { mensaje: 'Este es el ejercicio 2' } });
        this.dispatchEvent(customEvent);
      });
  
      shadowRoot.appendChild(style);
      shadowRoot.appendChild(button);
    }
  }
  
  customElements.define('emisor-component', EmisorComponent);
  