
    //Pegando o ul dentro de onde tem a ID app
    let listElement = document.querySelector('#app ul');
    //Pegando o input dentro de ontem tem a ID app
    let inputElement = document.querySelector('#app input')
    //Pegando o button dentro de ontem tem a ID app
    let buttonElement = document.querySelector('#app button')
    
    let tarefas = JSON.parse(localStorage.getItem('Lista de tarefas')) || [];

    function addTODO() {
        let inputText = inputElement.value;
        tarefas.push(inputText);
        inputElement.value = '';
        renderTODO();
        saveToStorage();
    }

    renderTODO();

    function renderTODO() {

        listElement.innerHTML = '';

        for (tarefa of tarefas) {
            let todoElement = document.createElement('li');
            let todoText = document.createTextNode(tarefa);
            
            let linkElement = document.createElement('a');
            let linkText = document.createTextNode('Excluir');
            linkElement.setAttribute('href', '#');
            let position = tarefas.indexOf(tarefa);
            // linkElement.setAttribute('onclick', 'deleteTODO(' + position + ')');
            // linkElement.setAttribute('onclick', `deleteTODO('${position}')`);
            linkElement.addEventListener('click', () => deleteTODO(position)); // quando abre a arrow function precisa return
            
            linkElement.appendChild(linkText);

            todoElement.appendChild(todoText);
            todoElement.appendChild(linkElement);
            listElement.appendChild(todoElement);
        }
    }
    
    buttonElement.onclick = addTODO;

    function deleteTODO(position) {
        tarefas.splice(position, 1); // Remove da posição determinada 1 elemento
        renderTODO();
        saveToStorage();
    }

    function saveToStorage() {
        JSON
        localStorage.setItem('Lista de tarefas', JSON.stringify(tarefas));
    }