
export function findTag(search){
    return function (todo,index) { 
        const _search = search.toLowerCase()
        const _tags = todo.tags.map(t => t.toLowerCase())    
        return _tags.includes(_search)
        // return 
    }
}

export function allDone(todo){
    return todo.done == true
}

export function findById(id){
    return todo=> todo.id == id
}
// export {findTag,allDone}