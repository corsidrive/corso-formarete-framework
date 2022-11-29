// template literal 
 function RenderingListItem(todo) {
    // Ternary operator
    const _checked = todo.done ? 'checked': ''
    const _done = todo.done ? 'done': ''
    
    console.log(_checked,todo.done)
    // checked
    return `<li class="list-group-item">
            <input class="form-check-input me-1" ${_checked} 
                type="checkbox" 
                id="${todo.id}"
                >
                <label class="form-check-label ${_done}" for="${todo.id}">
                    ${todo.label}
                </label>
            </li>`
}

export {    RenderingListItem }