const calificaciones = [98, 67, 78, 87, 84, 45, 67, 78, 98, 99];

//metodo corto
const promedio = calificaciones.reduce( (accumulator, currentValue) => accumulator + currentValue, 0) / calificaciones.length;

//filtrar elemeeentos de un array
const calificacionesFiltradas = calificaciones.filter( calificacion => calificacion > promedio);

console.log(promedio);
console.log(calificacionesFiltradas);

