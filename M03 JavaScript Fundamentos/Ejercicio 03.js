/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if(x === y) {
      return true;
   } else {
      return false;
   }
 }
 
 console.log(sonIguales(2, 4));  // Devuelve False
 console.log(sonIguales(3,3));   // Devuelve True


function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   if(str1.length === str2.length) {
      return true;
   } else {
    return false;
   }
}

console.log(tienenMismaLongitud('Francisco', 'Teresa'));  // Devuelve false
console.log(tienenMismaLongitud('Pedro', 'María'));  // Devuelve true

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if(num < 90) {
      return true;
   } else {
      return false;
   }
}
  
console.log(menosQueNoventa(85));  // Devuelve true
console.log(menosQueNoventa(91));  // Devuelve false

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if(num > 50) {
      return true;
   } else {
      return false;
   }
}
  
console.log(mayorQueCincuenta(26));  // Devuelve false
console.log(mayorQueCincuenta(63));  // Devuelve true

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 2 === 0) {
      return true;
   } else {
      return false;
   }
}
  
console.log(esPar(5));  // Devuelve false
console.log(esPar(6));  // Devuelve true

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 2 !== 0) {
      return true;
   } else {
      return false;
   }
}
  
console.log(esImPar(9));  // Devuelve true
console.log(esImPar(4));  // Devuelve false

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
