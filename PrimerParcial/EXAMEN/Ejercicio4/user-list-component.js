class ExternalDataComponent extends HTMLElement {
    connectedCallback() {
        this.getDataFromAPI();
    }
    getDataFromAPI() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }
                return response.json();
            })
            .then(data => this.displayData(data))
            .catch(error => console.error(error));
    }
    displayData(data) {
        const listContainer = document.createElement('ul');

        data.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.email;
            listContainer.appendChild(listItem);
        });

        this.innerHTML = '';

        this.appendChild(listContainer);
        console.log(data);
    }
}
customElements.define('external-data-component', ExternalDataComponent);