

interface calificaciones {
    calificaciones: number[];
    suma: number;
    promedio: number;
    calificacionesFiltradas: number[];
    sumar(): void;
    setPromedio(): void;
}

export class Arrays implements calificaciones {

    public calificaciones: number[];
    public suma: number;
    public calificacionesFiltradas: number[];
    public promedio: number;

    constructor( calificaciones = [] ){
        this.calificaciones = calificaciones;
        this.suma = 0;
        this.calificacionesFiltradas = [];
        this.promedio = 0;
    }

    //metodo para sumar los elementos de un array
    public sumar(){
        for(let i = 0; i < this.calificaciones.length; i++){
            this.suma += this.calificaciones[i];
        }
    }

    //metodo para sacar el promedio
    public setPromedio(){
        this.promedio = this.suma / this.calificaciones.length;
    }

    //metodo para filtrar los elementos mayores al promedio
    public filtrar(){
        this.calificacionesFiltradas = this.calificaciones.filter( calificacion => calificacion > this.promedio);
    }

    public get obtenerCalificaciones(){
        this.sumar();
        this.setPromedio();
        this.filtrar();
        return this.calificacionesFiltradas;
    }

    public get numeroMenor(){
        const menor = this.calificaciones.sort( (a, b) => a - b);
        return menor[0];
    }

    public get numeroMayor(){
        const mayor = this.calificaciones.sort( (a, b) => b - a);
        return mayor[0];
    }

}




