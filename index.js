let nombres = {
  nombre: "Jesús",
  apellido: "Guzmán",
};

console.log(nombres.nombre);
console.log(nombres.hasOwnProperty("telefono"));

console.log(nombres);

function perro(nombre, edad) {
  let perro = Object.create(ObjectoConstructor);
  perro.nombre = nombre;
  perro.edad = edad;
  return perro;
}

let ObjectoConstructor = {
  habla: function () {
    return "Wof wof, ¡soy un perro!";
  },
};

let firulais = perro("Firulais", 9);
console.log(firulais);
console.log(firulais.habla());

//Aqui termina la clase

//Aqui renombre el repositorio
