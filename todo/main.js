import { getTodos } from "./todo_module.js";
import { RenderingListItem } from "./todo_rendering_module.js";

getTodos().then((data)=>{
    const html = data.map(RenderingListItem)
    const TodoListElement = document.getElementById('TodoList')
    TodoListElement.innerHTML = html 

    // delegation event 
    TodoListElement.addEventListener('click',(event)=>{
            // console.log(event.target.classList.toggle('done'))
            event.preventDefault()
            const label = event.target.closest(".list-group-item").querySelector('label')
            const input = event.target.closest(".list-group-item").querySelector('input')
            input.checked = !input.checked 
            label.classList.toggle('done')
            console.log(input,label)
    })

})





