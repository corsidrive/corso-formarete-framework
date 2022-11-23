// template literal 
function RenderingListItem(todo) {
    return `<li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
                <label class="form-check-label" for="firstCheckbox">
                    ${todo.label}
                </label>
            </li>`
}

export { RenderingListItem }