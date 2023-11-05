//? WHILE
// Mientras que ocurra una condicion, hace lo siguiente
var num = 5;
while (num < 10) {
  console.log("Estoy corriendo 10 m");
  num = num + 1;
}
//? DO WHILE
// Hace lo siguiente, mientras se cumpla esta condicion
var numero = 1;
do {
  console.log("hola");
  numero = numero + 1;
} while (numero < 4);
//? FOR
// El for define un indice que va a cumplir el rol de iterador, debemos definirle hasta cuando o hasta donde va a iterar y tambien debemos decirle de cuanto en cuanto va a iterar, si es de uno en uno o de dos en dos.
for (var i = 0; i < 10; i++) {
  console.log(i);
}

//? Object -> Arrays -> []
// Un array es una coleccion de elementos ordenados
// posiciones / indices
// siempre el indice de un array arranca en 0
// Podemos calcular la longitud -> cantidad de elementos
// .length
var arreglo1 = [4, 5];
//                 ^
console.log(arreglo1.length - 1);
//           0  1
console.log([1, 4, 5].length - 1);
//           0  1  2
// No podemos confundir las posciciones con la longitud

//? Fusionemos bucles con los arreglos
var arreglo2 = [1, 3, 5, 7, 9, 11, 13]; // length 7
//                                 ^                      
for (var i = 0; i < arreglo2.length; i++) {
  console.log(arreglo2[i]);
}

//? Switch