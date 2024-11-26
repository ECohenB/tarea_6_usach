// 1. Mostrar en consola la secuencia de Fibonacci:a. Entre los números 0 y 1000.b. Números pares entre 0 y 1000.c. Números impares entre 0 y 1000.
// La secuencia de Fibonacci es una serie infinita de números naturales que se genera sumando los dos números anteriores.

function fibonacci1000(opcion, a = 0, b = 1) {
    if (a >= 1000) return; // termina cuando `a` es mayor o igual a 1000
  
    // Mostrar el número de Fibonacci
    if (opcion === "pares" && a % 2 === 0) {
      console.log(a); // Muestra el número si es par
    } else if (opcion === "impares" && a % 2 !== 0) {
      console.log(a); // Muestra el número si es impar
    } else if (opcion === undefined) {
      console.log(a); // Muestra todos los números de la secuencia de Fibonacci hasta 1000
    }
    // Llamada recursiva:
    fibonacci1000(opcion, b, a + b);
  }
  // llamadas de la función
  fibonacci1000("pares");   // Muestra sólo los números pares
  fibonacci1000("impares"); // Muestra sólo los números impares
  fibonacci1000();          // Muestra todos los números de la secuencia de Fibonacci hasta 1000
  
// 2. Crear un nuevo arreglo con todos los nombres de pokemones en mayúsculas, para esto se utilizó el método map y el método toUpperCase que convierte el objeto a mayúsculas.

let pokemon = [
    'Pikachu',
    'Charmander',
    'Bulbasaur',
    'Squirtle'
  ];
  
  let pokemonenmayusculas = pokemon.map(pokemon => pokemon.toUpperCase());
  
  console.log(pokemonenmayusculas);
  
//3.  Del siguiente arreglo de objetos, retornar otro arreglo con los pokemon tipo fuego.
// se utilizó el método filter() que crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

    let pokemon2 = [
    {
    nombre: 'Pikachu',
    tipo: 'Electrico'
    },
    {
    nombre: 'Charmander',
    tipo: 'Fuego',
    },
    {
    nombre: 'Bulbasaur',
    tipo: 'Planta'
    },
    {
    nombre: 'Squirtle',
    tipo: 'Agua'
    },
    {
    nombre: 'Charmeleon',
    tipo: 'Fuego'
    },
    {
    nombre: 'Weedle',
    tipo: 'bicho'
    },
    {
    nombre: 'Charizard',
    tipo: 'Fuego'
    }
   ]

   let pokemonFuego = pokemon2.filter(pokemon2 => pokemon2.tipo === 'Fuego');

console.log(pokemonFuego);