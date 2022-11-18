
// DOCS | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
console.clear()
const Todoist = [

    {
        label:"Comprare il latte",
        done:false,
        tags: ['urgente','casa']
    },
    {
        label:"Comprare Farina",
        done:false,
        tags: ['casa']
    },
    {
        label:"Meeting su zoom",
        done:false,
        tags: ['lavoro','urgente']
    },
]


function urgente(todo,index,all) {      
    const res = todo.tags.includes("urgente")
    return res
}

const res = Todoist.filter(urgente)

// console.log(res);

console.log(Todos.findTag("casa"));