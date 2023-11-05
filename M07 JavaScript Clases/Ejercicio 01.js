/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() {
   // Crea una Clase de ES6 o una función constructora llamada "Usuario".
   // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
   // El valor de cada propiedad la recibirá por parámetro.
   // Además, esta clase debe tener un método llamado "saludar".
   // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
   // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
   // Retornar la clase.
   // Tu código:

   function Usuario(usuario, nombre, email, password) {
      this.usuario = usuario;
      this.nombre = nombre;
      this.email = email;
      this.password = password;
      this.saludar = function() {
        return `Hola, mi nombre es ${this.nombre}`;
      }
    }
  
    const jose = new Usuario('joseangvas', 'José Angel Vásquez', 'correo@correo.com', 'jav123');
    const maria = new Usuario('marinavas', 'María Navas', 'correo2@correo.com', 'mar123');
    console.log(jose.saludar());
    console.log(maria.saludar());
}

function agregarMetodoPrototype(Usuario) {
   // Agrega un método al prototipo de "Usuario".
   // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
   // Tu código:
   function Usuario(nombre) {
      this.nombre = Usuario;
    }
  
    Usuario.prototype.saludar = function() {
      return 'Hello World!';
    }
  
    let pedro = new Usuario('Pedro');
  
    return pedro.saludar();
  }
  
  console.log(agregarMetodoPrototype('Pedro'));

function agregarStringInvertida() {
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".
   // Tu código:
   
   String.prototype.reverse = function() {
      return this.split("").reverse().join("");
    };
  
    var frase = "Estoy aprendiendo JavaScript";
    return frase.reverse();
  }
  
  console.log(agregarStringInvertida());

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
};
