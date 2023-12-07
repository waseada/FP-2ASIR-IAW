//En cada ejercicio crearemos un nuevo bloque (con { y }) donde escribiremos nuestro código
//Así podemos usar variables con el mismo nombre en diferentes ejercicios sin que haya ningún conflicto

//Importante: para los ejercicios 5 y 6 utiliza un único bloque, ya que comparten código.
//Importante: lo mismo para los ejercicios 7 y 8.

//Ejercicio 1
{
    //Escribe en la consola un mensaje como este al principio de cada bloque de ejercicio
    let a = 25
    let b = a
    a = 40
    console.log(b);
    //el valor de B al sumarse es 25, ya que escoje ese valor antes de que a cambie a 40
    let c = [25]
    let d = c
    c = [40]
    console.log(d); // El valor de d es [25] ya que d hace referencia al mismo array que c al principio. Aunque c cambie a [40] d no se ve afectado.
    //
}

//Ejercicio 2
{
    function logType(variables) {
        console.log(typeof variables);
    }
    let var1 = 25;
    let var2 = "Un texto";
    let var3 = false;
    let var4 = { key: "value" };
    let var5 = null;

    logType(var1) //salida: numero
    logType(var2) //salida: string
    logType(var3) //salida: boolean
    logType(var4) //salida objeto
    logType(var5) //salida null
}

//Ejercicio 3 

{
    document.getElementById('calcularIVA').addEventListener('click', function () {
        // Valor del campo precioIVA
        var precio = parseFloat(document.getElementById('precioIVA').value);

        // Calcular el IVA
        var iva = precio * 0.21;

        // resultado IVA
        document.getElementById('resultadoIVA').textContent = iva.toFixed(2) + " €";
    })
}

//Ejercicio 4

var campoTexto = document.getElementById('texto');
        var numCaracteresSpan = document.getElementById('numCaracteres');

        function contarCaracteres() {
            var numCaracteres = campoTexto.value.length;
            numCaracteresSpan.textContent = numCaracteres;
        }

        campoTexto.addEventListener('input', contarCaracteres);

//Ejercicio 5
{
    var miArray = [];
    var itemCampo = document.getElementById('item');
    var addNumberBtn = document.getElementById('addNumber');
    var listSpan = document.getElementById('list');

    listSpan.textContent = JSON.stringify(miArray);

    function agregarNumero() {
        var nuevoNumero = parseFloat(itemCampo.value);

        if (!isNaN(nuevoNumero)) { //isNaN es not a number
            miArray.push(nuevoNumero);
            listSpan.textContent = JSON.stringify(miArray);
            itemCampo.value = '';
        }
    }

    addNumberBtn.addEventListener('click', agregarNumero);
}

//Ejercicio 6

var miArray = [];
var itemCampo = document.getElementById('item');
var addNumberBtn = document.getElementById('addNumber');
var listSpan = document.getElementById('list');
var maxSpan = document.getElementById('max');

listSpan.textContent = JSON.stringify(miArray);
maxSpan.textContent = obtenerMaximo(miArray);

addNumberBtn.addEventListener('click', function() {
    var nuevoNumero = parseFloat(itemCampo.value);

    if (!isNaN(nuevoNumero)) {
        miArray.push(nuevoNumero);
        listSpan.textContent = JSON.stringify(miArray);
        maxSpan.textContent = obtenerMaximo(miArray);
        itemCampo.value = '';
    }
});

function obtenerMaximo(array) {
    return Math.max(...array);
}

//Ejericio 7

var miOtroArray = [];
        var addItemBtn = document.getElementById('addItem');
        var totalSpan = document.getElementById('total');

        addItemBtn.addEventListener('click', function() {
            var nuevoElemento = {
                nombre: document.getElementById('name').value,
                apellidos: document.getElementById('surname').value,
                edad: parseInt(document.getElementById('age').value)
            };

            miOtroArray.push(nuevoElemento);
            totalSpan.innerHTML = miArray.length;

            // Limpiar los campos
            document.getElementById('name').value = '';
            document.getElementById('surname').value = '';
            document.getElementById('age').value = '';
        })

//Ejercicio 8

var miotrootroArray = JSON.parse(localStorage.getItem('miArray')) || [];
        var addItemBtn = document.getElementById('addItem');
        var totalSpan = document.getElementById('total');

        totalSpan.innerHTML = miArray.length;

        addItemBtn.addEventListener('click', function() {
            var nuevoElemento = {
                nombre: document.getElementById('name').value,
                apellidos: document.getElementById('surname').value,
                edad: parseInt(document.getElementById('age').value)
            };

            miotrootroArray.push(nuevoElemento);
            totalSpan.innerHTML = miArray.length;

            // Limpiar los campos
            document.getElementById('name').value = '';
            document.getElementById('surname').value = '';
            document.getElementById('age').value = '';

            // Guardar en local
            localStorage.setItem('miArray', JSON.stringify(miotrootroArray));
        });