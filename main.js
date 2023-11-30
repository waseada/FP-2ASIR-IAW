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

let miVariable1
//tipos de variables
let nombre = 'Mi nombre' //esta es de tipo string
let edad = 30 //numero
let soltero = true //tipo booleano
let zero = null //valor especail expecifico

let ficha = {
    nombre: 'Mi nombre',
    edad: 30,
    soltero: true
}

//diferencia de valor y re
let a = 5
let b = a
a=7 //con esto tendremos que el valor de A = 7 y el de B = 5 ya que b obtiene el valor de a antes de cambiar de valor

//Funciones
let imprimir = function algo(){
    console.log('Imprime algo')
}

//array si se hace una lista se realiza con corchetes y para sacar
//resultados tienes que poner el numero que tiene como posicion en la lista
let list = [
    'paul',
    'john',
    'george',
    'ringo'
]


function calculadoraNota(numero) {
    if (numero == 0) {
        resultado = 'hola que tal'
    }
    else {
        resultado = 'no hola que tal'
    }
    console.log(resultado)
}

function factorial(n) {
    if (n >= 1) {
        return n * factorial(n-1)
    }
    return 1
}    console.log(resultado)


function factorialWhile(n){
        let resultado=n
        let m=n
        while (m >= 1) {
            resultado = resultado * n
            m= m-1
        }
    return resultado
    }

// si usamos el caso de m=m-1 en vez de poner eso podemos poner de forma
//abreviada m-- en caso negativo o m++ en positivo
//con el siguiente ejemplo coje la lista de acontinuacion y suma sus numros
lista [100, 50, 80, 70, 50]

function suma(lista) {
    resultado = 0
    for (let i = 0; i < lista.length; i++) {
        resultado=resultado + lista [i]
    }
    return resultado;
}