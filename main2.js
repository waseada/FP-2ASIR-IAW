{
    function reaccion(evento) {
        let nombre = document.getElementById("nombre").value;
        let saludo = document.getElementById("saludo");
        if (nombre.length > 2) {//me pusiste un nombre
            saludo.innerHTML = "Hola " + nombre;
        } else {
            saludo.innerHTML = "Cómo te llamas?"
        }
    }
    let boton = document.getElementById("boton");
    boton.addEventListener("click", reaccion);
    console.log(boton);

    let guardado = localStorage.getItem("fichas")
    let fichas = guardado ? guardado : [] //equivale a un if else, pregunta por guardado el ?, si lo tiene se lo asigna, los : dice que haga [] vamos que ? es if y : else
    //hay que poner algo aun que sea para indicar que esta vacio
    function save() {

        let ficha = {
            nombre: document.getElementById("name").value,
            apellido: document.getElementById("surname").value,
            edad: document.getElementById("age").value
        }
        console.log(ficha)
        fichas.push(fichas)
       // sessionStorage() almacena pero no es fijo
        localStorage.setItem("fichas", fichas) //almacena datos en el navegador como cookies, pero en un lugar seguro
        //tiene dos parametros local, set y get con set almacena informacion como cookies y en disco duro del cliente
        //cada vez que guardemos, se me añade a la lista
        //a push le pasamos un parametro y lo introduce al final de la lista
        //con pop te pilla el ultimo de la lista y lo introduce de nuevo
    }
    let button = document.getElementById("button");
    button.addEventListener("click", save);
}
//con != es decir no es igual
//con == es como decimos que tiene que ser igual a algo