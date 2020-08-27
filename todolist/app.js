const todos = [];

window.onload = () => {
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault(); //previene que se actualice la pagina
        todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText);
        const todolist = document.getElementById('todo-list');
        const todosTemplate = todos.map(t => '<li>' + t + '</li>');
        todolist.innerHTML = todosTemplate.join('');
        const elementos = document.querySelectorAll('#todo-list li')
        elementos.forEach((elemento, i) => {
            elemento.addEventListener('click', () => {
                console.log(elemento, i);
  
            })
        })
    }
}



//todolist.innerHTML = '';
//for(let i = 0; i < todos.length; i++){
        //    todolist.innerHTML += '<li>' + todos[i] + '</li>';
        //}