

class Arrays {

    constructor( calificaciones = [] ){
        this.calificaciones = calificaciones;
        this.suma = 0;
        this.calificacionesFiltradas = [];
        this.promedio = 0;
    }

    //metodo para sumar los elementos de un array
    sumar(){
        for(let i = 0; i < this.calificaciones.length; i++){
            this.suma += this.calificaciones[i];
        }
    }

    //metodo para sacar el promedio
    setPromedio(){
        this.promedio = this.suma / this.calificaciones.length;
    }

    //metodo para filtrar los elementos mayores al promedio
    filtrar(){
        this.calificacionesFiltradas = this.calificaciones.filter( calificacion => calificacion > this.promedio);
    }

    get obtenerCalificaciones(){
        this.sumar();
        this.setPromedio();
        this.filtrar();
        return this.calificacionesFiltradas;
    }

    get numeroMenor(){
        const menor = this.calificaciones.sort( (a, b) => a - b);
        return menor[0];
    }

    get numeroMayor(){
        const mayor = this.calificaciones.sort( (a, b) => b - a);
        return mayor[0];
    }

}





module.exports = Arrays;

