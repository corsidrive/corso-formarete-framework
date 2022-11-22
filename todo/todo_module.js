
export function findTag(search){
    return function urgente(todo) { 
        const _tags = todo.tags.map( tag => tag.toLowerCase())
        const _search = search.toLowerCase()
        return _tags.includes(_search)
    }
}

export function allDone(todo){
    return todo.done == true
}

export function findById(id){
    return todo=> todo.id == id
}
// export {findTag,allDone}