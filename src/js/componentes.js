import { todoList } from "..";
import { Todo } from "../classes";



const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml =( todo )=>{

    const htmlTodo =`<li class="${(todo.completado) ? 'completed' : '' }" data-id="${todo.id}">
                        <div class="view">
                            <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : '' }>
                            <label>${todo.tarea}</label>
                            <button class="destroy"></button>
                        </div>
                        <input class="edit" value="Create a TodoMVC template">
                    </li> `;
    const div = document.createElement('div');
    div.innerHTML=htmlTodo;

    divTodoList.append(div.firstElementChild);
    return div.firstElementChild;
}


//Eventos
//Cuando se presiona una tecla // Event nos mencionará cual fue la tecla que se presionó
txtInput.addEventListener('keyup',(event)=>{
    if (event.keyCode===13 && txtInput.value.length>0){
        const nuevoTodo = new Todo(txtInput.value);
        console.log(nuevoTodo);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value='';
    }
});

divTodoList.addEventListener('click', (event)=>{
    // console.log('CLick');
    // console.log(event.target); // COn esto nos damos cuenta que dimos click
    // console.log(event.target.localname); // CON esto nos damos cuenta que nombre local tiene

    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement; // Este 
    const todoId = todoElemento.getAttribute('data-id');

    // console.log(todoElemento); // COn esto podemos verificar a que estamos dando CLick
    // console.log(todoId);

    //Si hicimos check en el textbox
    if (nombreElemento.includes('input') ){
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')){
        todoList.eliminartodo(todoId)
        divTodoList.removeChild(todoElemento);
    }
    // console.log(todoList);
});

btnBorrar.addEventListener('click',()=>{
    todoList.eliminarCompletados(); // COn esto los borramos del array
    //Para borrar los del HTML sería lo siguiente:

    for( let i = divTodoList.children.length-1;i>=0;i--){
        const elemento = divTodoList.children[i];
        if (elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
})

ulFiltros.addEventListener('click',(event)=>{
    const filtro = event.target.text;
    if (!filtro) { return };

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    // console.log(event.target);
    event.target.classList.add('selected');


    for(const elemento of divTodoList.children){
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');
        switch (filtro){
            case 'Pendientes':
                if (completado){
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if (!completado){
                    elemento.classList.add('hidden');
                }
                break;
        }
        // console.log('elemento',elemento); //Revisamos las clases de ese elemento
    }

    // console.log(event.target.text);  //COn esto podemos obtener cual es el nombre del texto que estamos revisando
});