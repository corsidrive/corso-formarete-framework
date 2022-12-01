import { getTodos } from "./todo_module.js";
import { RenderingListItem } from "./todo_rendering_module.js";

getTodos().then((data)=>{
    const html = data.map(RenderingListItem)
    const TodoListElement = document.getElementById('TodoList')
    TodoListElement.innerHTML = html 

    // delegation event 
    TodoListElement.addEventListener('click',(event)=>{
            event.preventDefault()
            // console.log(event.target.classList.toggle('done'))
            const label = event.target.closest(".list-group-item").querySelector('label')
            label.classList.toggle('done')

            const input = event.target.closest(".list-group-item").querySelector('.form-check-input')
            input.checked = !input.checked

    })

})





