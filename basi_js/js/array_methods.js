
// DOCS | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
console.clear()
const Todoist = [

    {
        label:"Comprare il latte",
        done:true,
        tags: ['urgente','casa']
    },
    {
        label:"Comprare Farina",
        done:true,
        tags: ['casa']
    },
    {
        label:"Meeting su zoom",
        done:false,
        tags: ['lavoro','urgente']
    },
]


// SENZA FUNZIONE DI ORDINE SUPERIORE
function urgente(todo,index,all) {      
    const res = todo.tags.includes("urgente")
    return res
}
const resUrgente = Todoist.filter(urgente)

function casa(todo,index,all) {      
    const res = todo.tags.includes("casa")
    return res
}

const resCasa = Todoist.filter(casa)


// FIND TAG
function findTag(search){
        return function urgente(todo) { 
            //console.log(todo.label,"----")

            const res = todo.tags.includes(search)
            return res
        }
}


// console.log(findTag("casa"));
Todoist.filter(findTag("casa"))



function allDone(todo){
    return todo.done == true
}

// console.log("ho fatto tutto ?", Todoist.every(allDone))
// console.log("ho fatto tutto per la casa ?", Todoist.fil// ter(findTag('casa')).every(allDone))

// Hofatto tutto ?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join