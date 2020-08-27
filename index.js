alert('intro a DOM') crea un mensaje al inicio de la pagna
window.onload =  () => { //espera a que todo el contenido de la pagina este cargado
const parrafo = document.getElementById('text') //obtiene un elemento del html por el id
console.log(parrafo.innerText)//innertext accede al texto dentro del id
}
window.onload =  () => { //espera a que todo el contenido de la pagina este cargado
    const parrafo = document.getElementById('text') //obtiene un elemento del html por el id
    parrafo.innerText = 'text actualizado' //cambiar desde js el texto en html 
    }
window.onload =  () => { //espera a que todo el contenido de la pagina este cargado
    const parrafo = document.getElementById('text') //obtiene un elemento del html por el id
    parrafo.innerHTML = '<li>elemento 2</li><li>elemento 2</li>' //innerhtml cambia desde js un elemento en html
}

