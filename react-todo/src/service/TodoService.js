// function expression
// funzioni sono tipi di prima classe 
const addTodo = function(oldTodoList,label = "da fare",tags = []){
    // ES6 operatore di destrutturazione
    // creo una copia di oldTodoList
    const id = oldTodoList.length
    const newTask = {
        "id": id,
        "label":label,
        "done":false,
        "tag":tags
    } 

    // senza push con spread operator
    // const newTodoList = [...oldTodoList,newTask]
    
    // con PUSH
    const newTodoList = [...oldTodoList] // copia
    newTodoList.push(newTask) // aggiungo
    return newTodoList   
}

//console.log(newTasklist);




function removeTodo(oldTodoList,idDaEliminare) {
    const newTodoList = [...oldTodoList]
    const index =  newTasklist.findIndex((todo)=>{
        console.log("vedo:",todo.id,idDaEliminare,todo.id == idDaEliminare)
        return todo.id == idDaEliminare
    })
    console.log("trovato",index);
}

let newTasklist = []

newTasklist = addTodo(newTasklist);
newTasklist = addTodo(newTasklist,'Comprare il latte');
newTasklist = addTodo(newTasklist,'Meeet',['urgente']);

console.log("prima della rimozione",newTasklist);

newTasklist = removeTodo(newTasklist,1)

console.log("dopo della rimozione",newTasklist);