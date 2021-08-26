// Agregar el nombre.class sirve para las reglas del framework
export class Todo{

    //Esta función nos ayudará a recrear el JSON a la clase asignada
    //Dado que ya sabesmoq ue viene en el JSON, será mejor ocupar la destructuración de objeto para mandar los parametros directos
    static fromJson({id,tarea,completado,creado}) {
        const tempTodo = new Todo(tarea);
        tempTodo.id=id;
        tempTodo.completado=completado;
        tempTodo.creado=creado;
        return tempTodo;
    }

    constructor(tarea){
        this.tarea = tarea;
        this.id    = new Date().getTime();
        this.completado = false
        this.creado = new Date();
    }

    imprimirClase(){
        console.log(`${this.tarea} - ${this.id}`);
        
    }
}