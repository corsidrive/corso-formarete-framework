
export function findTag(search){
    return function urgente(todo) { 
        // findTag.toLowecase == search.tolowercase

        //const res = todo.tags.includes(search)
        return 
    }
}

export function allDone(todo){
    return todo.done == true
}

export function findById(id){
    return todo=> todo.id == id
}
// export {findTag,allDone}