const Arrays = require("./ArraysClass");


const calificaciones = [2297, 467, 3378, 847, 864, 545, 4676, 7387, 9389, 1919, 8678, 6565, 6565];

const array = new Arrays( calificaciones );

console.log(`El numero mayor es: ${array.numeroMayor} y el numero menor es ${array.numeroMenor}`);

const arrayOrdenado = calificaciones.sort( (a, b) => a - b);

console.log(arrayOrdenado[calificaciones.length -2 ]);


