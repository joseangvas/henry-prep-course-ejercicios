/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.

   Constructor() {
      this.nombre = "";
      this.apellido = "";
      this.edad = 0;
      this.domicilio = "";
      this.detalle = function() {
        return {
          nombre: this.nombre,
          apellido: this.apellido,
          edad: this.edad,
          domicilio: this.domicilio
        };
      }    
   }
}


function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:

   let nvaper = new Persona();
   nvaper.nombre = nombre;
   nvaper.apellido = apellido;
   nvaper.edad = edad;
   nvaper.domicilio = domicilio;
   return nvaper;
 }
 
 console.log(crearInstanciaPersona('José Angel', 'Vásquez', 57, 'La Morita'));

function agregarMetodo() {
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:

  Persona.prototype.datos = function() {
    return `${this.nombre}, ${this.edad} años`;
  }

  var pers = new Persona('Pedro', 'Rodriguez', 35, 'Caracas');
  return pers.datos();
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
