
// Define la clase del componente de lista de tareas
class TodoList extends HTMLElement {
  constructor() {    
    super();

    // Crea un Shadow DOM para el componente
    this.attachShadow({ mode: 'open' });

    // Agrega el contenido del componente al Shadow DOM
    this.shadowRoot.innerHTML = `
      <style>
        /* Estilos para el componente de lista de tareas */
      </style>
      <div id="todo-list">
        <p>Especifíque todas las tareas que realizó y continuación registre su nombre y el número de tareas.</p>
        <ul id="task-list">          
        </ul>
        <input type="text" id="task-input" placeholder="Nueva tarea">
        <button id="add-task">Agregar Tarea</button>
      </div>
    `;

    // Obtén referencias a los elementos del Shadow DOM
    this.taskList = this.shadowRoot.querySelector('#task-list');
    this.taskInput = this.shadowRoot.querySelector('#task-input');
    this.addTaskButton = this.shadowRoot.querySelector('#add-task');

    // Inicializa una lista de tareas
    this.tasks = [];

    // Agrega un evento de clic para agregar tareas
    this.addTaskButton.addEventListener('click', () => {
      this.addTask();
    });

    // Agrega un evento de tecla para agregar tareas al presionar Enter
    this.taskInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        this.addTask();
      }
    });

    // Agrega un evento de clic para eliminar tareas
    this.taskList.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        this.removeTask(event.target);
      }
    });
  }

  // Método para agregar una tarea
  addTask() {
    const taskText = this.taskInput.value.trim();
    if (taskText !== '') {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;
      this.taskList.appendChild(taskItem);
      this.tasks.push(taskItem);
      this.taskInput.value = '';
    }
  }

  // Método para eliminar una tarea
  removeTask(taskItem) {
    const index = this.tasks.indexOf(taskItem);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.taskList.removeChild(taskItem);
    }
  }

  }

// Define el componente de lista de tareas
customElements.define('todo-list', TodoList);


class MyHeader extends HTMLElement {
  constructor() {
    super();
    // Crear Shadow DOM
    this.attachShadow({ mode: 'open' });
    // Definir la estructura del componente de encabezado
    this.shadowRoot.innerHTML = `
      <style>        
        h1 {
          margin: 0;
        }
      </style>
      <header>
      <br>
        <h1>UNIVERSIDAD DE LAS FUERZAS ARMADAS - ESPE</h1>
        <h2>PROGRAMACIÓN INTEGRATIVA DE COMPONENTES WEB</h2>
        <h3>Sistema de Registro de Tareas Realizadas</h3>
      </header>
    `;
  }
}

// Registrar el componente de encabezado
customElements.define('my-header', MyHeader);

class MyForm extends HTMLElement {
  constructor() {
    super();
    // Crear Shadow DOM
    this.attachShadow({ mode: 'open' });
    // Definir la estructura del componente de formulario
    this.shadowRoot.innerHTML = `
    <style>
    /* Estilos para el componente de formulario */
    my-form {
      display: block;
      width: 300px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    label {
      display: block;
      margin-bottom: 8px;
      color: black;
    }

    input {
      width: 100%;
      padding: 8px;
      margin-bottom: 16px;
      box-sizing: border-box;
    }

    button {
      background-color: #007BFF;
      color: #fff;
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  </style>
      <form>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>

        <label for="email">Número de tareas realizadas: </label>
        <input type="number" min=0 id="numero" name="numero" required>

        <button type="submit">Enviar</button>
      </form>
    `;
  }
}

// Registrar el componente de formulario
customElements.define('my-form', MyForm);