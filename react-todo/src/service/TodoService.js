// function expression
// funzioni sono tipi di prima classe 
export const addTodo = function(oldTodoList,label = "da fare",tags = []){
    // ES6 operatore di destrutturazione
    // creo una copia di oldTodoList
    const id = oldTodoList.length
    const newTask = {
        "id": id,
        "label":label,
        "done":false,
        "tags":tags
    } 

    // senza push con spread operator
    // const newTodoList = [...oldTodoList,newTask]
    
    // con PUSH
    const newTodoList = [...oldTodoList] // copia
    newTodoList.push(newTask) // aggiungo
    return newTodoList   
}

//console.log(newTasklist);

export function removeTodo(oldTodoList,idDaEliminare) {
    const newTasklist = [...oldTodoList]
    
    const index =  newTasklist.findIndex((todo)=>{
        //console.log("vedo:",todo.id,idDaEliminare,todo.id == idDaEliminare)
        return todo.id == idDaEliminare
    })
    newTasklist.splice(index,1)
    return newTasklist
}


export const toggleTodo = (oldTodoList,idDaCambiare) => {
    const newTasklist = [...oldTodoList]
    const index = newTasklist.findIndex(todo => todo.id == idDaCambiare)
    newTasklist[index].done = !newTasklist[index].done 

    return newTasklist
}


//let newTasklist = []
//newTasklist = addTodo(newTasklist); // default // done false
//newTasklist = addTodo(newTasklist,'Comprare il latte');
//newTasklist = addTodo(newTasklist,'Meeet di lavoro',['urgente']);
//
//console.log("prima della rimozione",newTasklist);
//
//newTasklist = removeTodo(newTasklist,1)
//newTasklist = toggleTodo(newTasklist,0)
//newTasklist = toggleTodo(newTasklist,2)
//console.log("dopo della rimozione",newTasklist);