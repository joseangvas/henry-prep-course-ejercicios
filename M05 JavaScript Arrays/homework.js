/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

console.log(devolverPrimerElemento([8,2,3]));  // Devuelve 8

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.at(-1);
}

console.log(devolverUltimoElemento([5, 8, 3, 9]));  // Devuelve 9

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

console.log(obtenerLargoDelArray([2, 6, 8, 4, 7]));  // Devuelve 5


function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   let nuevoArray = [];
  
   for(let i = 0 ; i < array.length ; i++) {
     nuevoArray.push(array[i] + 1);
   }
 
   return nuevoArray;
 }
 
 console.log(incrementarPorUno([3, 5, 8, 4]));  // Devuelve [4, 6, 9, 5]


 function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
 }
 
 console.log(agregarItemAlFinalDelArray([3, 5, 8, 6], 4));
 
 
 function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
 }
 
 console.log(agregarItemAlComienzoDelArray([5, 6, 8, 2], 8));

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   let frase = '';

   for (let i=0; i<palabras.length; i++) {
     if (i === palabras.length - 1) {
       frase += `${palabras[i]} `;
     } else {
       frase += `${palabras[i]} `;
     }
   }
   
   return frase;
 }
 
 console.log(dePalabrasAFrase(['Hola', '¿como', 'estás?']));  // Devuelve Hola ¿como estás?


function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento)
}

console.log(arrayContiene([4, 5, 8, 12, 20], 1));  // Devuelve false

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var sum = 0;

   // for(let i = 0; i < arrayOfNums.length; i++) {
   //     sum += arrayOfNums[i];
   // }
 
   // return sum;
 
   arrayOfNums.forEach(function (num) {
     sum += num;
   });
 
   return sum;
 }
 
 console.log(agregarNumeros([4, 5, 3]));  // Devuelve 12

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var totalNotas = 0;

   resultadosTest.forEach((nota) => {
     totalNotas += nota;
   })
 
   const promedioFinal = totalNotas / resultadosTest.length;
   return promedioFinal;
 }
 
 console.log(promedioResultadosTest([12,16,19,18]));  // Devuelve 16.25

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var maxNumero = Math.max(...arrayOfNums);
   return maxNumero;
 }
 
 console.log(numeroMasGrande([15, 20, 18, 14]));  // Devuelve 20

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) {
      return 0;
   } else if (arguments.length === 1) {
      return arguments[0];
   } else {
     let producto = 1;
  
     for (let i=0; i<arguments.length;i++) {
        producto *= arguments[i]
     };
    
     return producto;
   }
}
    
console.log(multiplicarArgumentos());  // Devuelve 0
console.log(multiplicarArgumentos(7));  // Devuelve 7
console.log(multiplicarArgumentos(3,4,5));  // Devuelve 60

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contador = 0;

   array.forEach((elemento) => {
     if (elemento > 18) {
       contador++;
     }
   });
   
   return contador;
 }
 
 console.log(cuentoElementos([19, 20, 16, 18, 21]));  // Devuelve 3

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   switch (numeroDeDia) {
      case 1:
        case 7:
          return 'Es fin de semana';
          break;
      default:
        return 'Es dia laboral';
    }
  }
  
  console.log(diaDeLaSemana(4));  // Devuelve Es dia laboral

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

   num = String(num);
   return num[0] === '9' ? true : false;
 }
 
 console.log(empiezaConNueve(9123));  // Devuelve true

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

   const primerValor = array[0];

   for (let i = 1; i < array.length; i++) {
     if (primerValor !== array[i]) {
       return false;
     }
   }
   
   return true;
 }
 
 console.log(todosIguales([5,5,6,5,5]));

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

   var mesPedido = ['Enero', 'Marzo', 'Noviembre'];
   var nuevoArray = [];
 
   for (var i = 0; i < array.length; i++) {
     if (mesPedido.includes(array[i])) {
       nuevoArray.push(array[i]);
     }
   }
   
   if (nuevoArray.length == 3) {
     return nuevoArray;
   } else {
     return "No se encontraron los meses pedidos";
   }
 }
 
 console.log(mesesDelAño(['Marzo', 'Febrero', 'Diciembre', 'Enero', 'Noviembre']));
 console.log(nuevoArray);



function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

   let tabla = [];

   for (let i = 0; i <= 60; i++) {
     tabla.push(6 * i);
   };
   
   return tabla;
 };
 
 console.log(tablaDelSeis());

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   var nuevoArray = [];

   var nuevoArray = array.filter(function(num) {
     if (num > 100) {
       return num;
     }
   });
 
   return nuevoArray;
 };
       
 console.log(mayorACien([5, 89, 101, 15, 120, 200, 220]));  // Devuelve [101, 120, 200, 220]

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
