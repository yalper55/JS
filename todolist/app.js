const todos = JSON.parse(localStorage.getItem('todos')) || [];//guarda localmente los datos (json.parce para q lea datos ademas de los string)


const render = () => {
    const todolist = document.getElementById('todo-list');
    const todosTemplate = todos.map(t => '<li>' + t + '</li>');
    todolist.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li')
    elementos.forEach((elemento, i) => {
    elemento.addEventListener('click', () => {
        elemento.parentNode.removeChild(elemento) // usa el nodo padre para eliminar a sus hijos (elimina con click dato ingresado)
        todos.splice(i,1) //indice q queresmos eliminar y la cantidad (limpia variable todos)
        actualizaTodos(todos)
        render()
    })
})
}
const actualizaTodos = (todos) => {
    const todoStrings = JSON.stringify(todos) //lo pasa a un string
        localStorage.setItem('todos',todoStrings)

}

window.onload = () => {
    render()
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault(); //previene que se actualice la pagina
        todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText);
        actualizaTodos(todos)
        render()      
    }
}



//todolist.innerHTML = '';
//for(let i = 0; i < todos.length; i++){
        //    todolist.innerHTML += '<li>' + todos[i] + '</li>';
        //}