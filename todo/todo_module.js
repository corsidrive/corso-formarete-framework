
// http://localhost:3000/todos
const base_url = 'http://localhost:3000' 

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

export const getTodos = () => {
    return fetch(base_url+'/todos').then((res)=> res.json()) // ---> promise
}