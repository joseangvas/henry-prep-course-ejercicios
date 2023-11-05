//? VARIABLES
var nombre = "Felipe";
var nickName = nombre; // "Felipe"
var numero; // undefined
var misIngresos = null; // vacio
console.log(misIngresos);
var isStudent = true;
var discurso =
  'Felipe dijo: "Hoy es un gran dia", luego dijo: "Es esto la matrix?"';
numero = 5;
5 + "hola"; // -> "5" + "hola" // -> concatenacion // "5hola"
5 - "hola"; // "5" - "hola" // NaN
misIngresos = 20;
var _edad = Infinity;
var Email;
var $amigos;
var nombre_de_la_mama; // snake-case
var nombreDeElPapa; // camel-case
var NombreDelHermano; // pascal-case

//? TIPOS DE DATOS
// boolean, string, number, null, undefined, not defined, NaN
//! Boolean -> true, false
//! Stings -> Cadena de texto -> "" , '' , ``
//! Number -> 5, 5.67, 3.14159, Infinity
//! Undefined -> (Indefinido)
//! Null -> (Vacio)
//! Not Defined -> ReferenceError -> Error de Referencia
//! NaN -> Not A Number ->

// HOLA MUNDO
console.log("Hola Mundo")

//? Operadores
//! Aritmeticos -> + - * / % ** ()
// () ** / * % + -
/* 16 / 4 -> 4
16 % 4 -> 0
16 | 4
0    4 */
//? Precedencia
// (4 + 5) * (2 - 1) = 9
Math.pow(2,3)
2 ** 3

//! Comparacion -> > , >= , < , <=, !== <=
4 > 6 // false
5 < 5 // false
5 <= 5 // true
5 != 5 // false
// Igualdad o diferencia de valor y tipo de dato
5 == "5" // true == compara el valor (2 iguales)
5 === "5" // false === compara valor y tipo de dato (3 iguales)
5 != "5" // false compara el valor ( 1 ! y 1 = )
5 !== "5" // true compara el valor y el tipo de dato (1 ! y 2 ==)
console.log(5 != "5")

//! Logicos -> AND, OR, NOT
// AND (&&) -> Solo es verdadero si ambas son verdaderas
// OR (||) -> Solo es falso si ambas son falsas
// NOT (!) -> La negacion

var sentencia1 = "Estamos en clase"
var sentencia2 = "Estamos aprendiendo JS"
var sentencia3 = "Estamos en cuarentena"
var sentencia4 = "Estamos en Enero"
// "" -> false
// "e" -> true
sentencia1 && sentencia2 // true
sentencia1 && sentencia3 // false
sentencia1 || sentencia2 // Conque una sea verdadera ya el resultado es verdadero // false
sentencia3 || sentencia4 // false
!sentencia4 // false

//? Funciones
// Una funcion es una maquinita
// una maquina necesita combustible / necesita estar enchufada
// Una maquina recibe algo que va a ser transormado
// Una vez que la pongamos en marcha, esa maquina se ejecuta y nos termina devolviendo un producto

function saludar(nombre) {
  // nombre = "Angelo"
  nombre = nombre + " bienvenido, como estas?"
  nombre = "Angelo" + " bienvenido, como estas?";
  nombre = "Angelo bienvenido, como estas?";
  return nombre
}

var resultadoFelipe = saludar("Felipe") // "Felipe bienvenido, como estas?"
console.log(resultadoFelipe)
var resultadoAngelo = saludar("Angelo")
console.log(resultadoAngelo)
console.log(saludar("Lucio"))
