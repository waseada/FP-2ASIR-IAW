let msg = "hola muendo"

console.log("hola mundo");

document.addEventListener("DOMContentLoaded", init) //pone en escucha un evento "DOM" 

function init(event) {
 //document.getElementById("title") //document contiene metodos y en este caso llamo a title que es un Id en el HTML
    let title = document.getElementById("title")  //crear variables let + nombre. Y para darle un valor tenemos que usar operadores (asignacion = [numero, string, id, etc], )
    title.style.color ="red"
    title.innerHTML = msg
    loadData("data.json") //llama a la funcion que tenemos debajo
}

function loadData(ruta) {
    let json
    fetch(URL)
        .then(Response => response.json) //es asincrono va ejecutando cosas directamente, cuando se ejecuta devuelve una respuesta llamada promesa que no se sabe cuando se va a materializar
        .then(data => EscribeLaLista(data))
}

function EscribeLaLista(json) {
    console.log(json)
}

// Esto es una linea de comentario
/**
 
Esto es un comantario en bloque 

 */