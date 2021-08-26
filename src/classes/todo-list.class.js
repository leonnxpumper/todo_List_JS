import { Todo } from "./todo.class";


export class TodoList{
    constructor (){
        // this.todos=[];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminartodo(id){
        //Esto es oytra forma alternativa de borrar un elemento de un array por medio de una condicionante
        this.todos = this.todos.filter(todo => todo.id != id );
        this.guardarLocalStorage();
    }

    marcarCompletado(id){
        
        for(const todo of this.todos){
            console.log(id,todo.id);
            if (todo.id===id){
                todo.completado=!todo.completado; // Si es true, se vuelve falso; si es falso, se vuelve true
                break;
            }
            
        }
        this.guardarLocalStorage();
    }

    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completado);
        //Recordemos que el filter regresa todo lo diferente a esta condición
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo',JSON.stringify(this.todos));
    }

    cargarLocalStorage(){

        //MEjor forma de escribirlo
        //Así ya lo tenemos como instancias
        this.todos = (localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [])
        // this.todos = this.todos.map(obj => Todo.fromJson(obj));
        this.todos = this.todos.map(Todo.fromJson);

        // //MEjor forma de escribirlo
        // EL detalle de esta forma es que regresamos objetos, no instancias de Todo
        // this.todos = (localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [])
        

        // // Esta es una forma correcta, ya que hay veces en donde no exista
        // if (localStorage.getItem('todo')){
        //     // // Al hacerlpo así nace como String
        //     // this.todos=localStorage.getItem('todo');
        //     this.todos=JSON.parse(localStorage.getItem('todo'));
        //     // console.log('Carga local:',this.todos);
        // }else {
        //     this.todos=[];
        // }
        
    }

}