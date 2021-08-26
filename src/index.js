import './styles.css';


import { Todo, TodoList} from './classes/index';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

//La forma normal de llamar el crearhtml es esta.
// todoList.todos.forEach(todo => (crearTodoHtml(todo)));
//cuando recibe solo un parametro puede mandarse a llamar de la siguiente manera, es mas corta y rapida
todoList.todos.forEach(crearTodoHtml);

// Esto es adicional
//Cuando regresamos los todos no los regresa de la instancia de la clase todo, sino son objetos.
console.log('todos',todoList.todos);
// const todom = new Todo('Tarea');
// console.log(typeof(todoList.todos[0]));
// todoList.todos[0].imprimirClase();
// todoList.todos[0].imprimirClase();

// const tarea = new Todo('Aprender JS!!');
// tarea.completado=true;

// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);


//LocalStorage y SessionStorage es en despliegue web // NODE no tiene acceso a eso,  para eso sería FileSystem

// localStorage.setItem('mi-key','Dato');
// // setTimeout(() => {
// //     localStorage.removeItem('mi-key');
// // }, 1500);

// sessionStorage.setItem('ms-de','AAA');