/*agregar comentario: alt + shift+ a */
/*comentario varias lineas */
//comentar una linea





console.log("Hola Mundo")
console.log("aqui podemos escribir cualquier cosa")
console.log("adios")
console.log("no hay autocompletado")
console.log(12345)
console.log(-1.123)

// Tipos de datos


/*vamos a declarar una variable */
let nombre = "Sebastian"
console.log(nombre)
nombre = "juan"
console.log(nombre)


/*declara una constante */
const pi = 3.1416
console.log(pi)

let numero1 = 7
let numero2 = 9
let resultado = numero1 + numero2
console.log("resultado:", resultado, "algo")

// Tipos de datos

// strings - texto
const ciudad = "bogota"
const pais1 = "colombia"
const pais2 = "argentina"
console.log(ciudad, pais1, pais2)

// lenguaje debilmente tipado
// int, float - numeros
const suma = 5
const edad = 20.5
const numeroNegativo = "-10"

console.log("multiplicacion:" , 5 *  "5")
console.log(suma, edad, numeroNegativo)

// Booleandos - verdadero o falso
let esVerde = true
let esMorado = false

// -------Estructuras de Datos--------------

// Array - Vectores - Listas

let listaDeNumeros = [20, -55, 100]
console.log(listaDeNumeros)

// ver un elemento de la lista
console.log(listaDeNumeros[0])
console.log(listaDeNumeros[1])
console.log(listaDeNumeros[2])

let listaCiudades = ["bogota" , "medellin" , "Cali"]

console.log(listaCiudades)

let listaDeListas = [listaDeNumeros, listaCiudades]
console.log(listaDeListas)

// acceder al dato "medellin"
console.log(listaDeListas[1][1])

// JSON (JavaScrit Objet Notation) - Objetos
// clave - valor
let usuario = {
    nombre: "leonardo" , 
    edad: 18, 
    ciudad: "bogota" ,
    ubicacion: {
         latitud: 1.5356564543,
         longitud: -2.3432353
    }
}
console.log(usuario)
console.log(usuario.nombre)
console.log(usuario.ubicacion.latitud)

usuario.edad = 25
console.log(usuario)

// nul nulo
let espacioVacio = null

//underfined - indefinido
let noDefinido = undefined
console.log(usuario.apellido)
// Not a Number - no es un numero
const noEsUnNumero = NaN
const multiplicacion = 10 * "hola"
console.log(multiplicacion)


//-------------Estructuras de Control-------------------
//Bucle - es un proceso que se repite------------
//loop - bucle indefinido-----------
const ListaAnimales = [
"perro",
"gato",
"oso",
"gallina"
]

console.log("tamaño del array:" , ListaAnimales.length)
for(let i = 0; i < ListaAnimales.length; i++) {
console.log(i)
console.log(ListaAnimales[i])
}

//const ListaDeVideos = [
//miniatura: "";
//titulo: "";
//canal: "";
//visualizaciones: 0





