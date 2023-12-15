function iniciarContador() {
  // Variable interna para gestionar el estado del contador
  let contador = 0;

  function actualizarContador() {
    document.getElementById('contador').innerText = contador;
  }

  window.incrementar = function () {
    contador++;
    actualizarContador();
  };

  window.disminuir = function () {
    contador--;
    actualizarContador();
  };

  actualizarContador();

  // Estilos integrados directamente en el JavaScript
  const estilos = `
    body {
      font-family: Arial, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }

    #contador {
      font-size: 24px;
      margin: 0 10px;
    }

    button {
      font-size: 18px;
      padding: 5px 10px;
      cursor: pointer;
    }
  `;

  // Insertar los estilos en el head del documento
  document.head.insertAdjacentHTML('beforeend', `<style>${estilos}</style>`);
}

iniciarContador();
