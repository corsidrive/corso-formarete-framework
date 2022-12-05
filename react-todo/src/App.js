import { useState } from 'react';
import './App.css';
import TaskItem from './component/task-item';
import TodoList from './db.json'


// const todos = TodoList 
// console.log(TodoList);
function App() {

  const [label,setLabel] = useState("")
  const [todos,setTodos] = useState(TodoList.todos)

  console.log(todos)

  function changeHandler(event){
     setLabel(event.target.value)
  }

  function addNewItem() {
  //     setTodos((data)=>{
  //       console.log(data)
  //       const newTodo = {
  //         "label" : label,
  //         "done":false,
  //         "tags":[]
  //       }
  //       console.log([...data,newTodo])
  //       return data
  //     })
  }

  return (
    <div className="App">
      <main className="container">

{todos.map(x=><b>-</b>)}

        {/* <header className="p-3 bg-secondary text-center">
            <h1>Todo APP</h1>
        </header>
        {label}
        
        <div className="input-group my-3">
          <input type="text" className="form-control" value={label} onChange={changeHandler} placeholder="Aggiungi una cosa da fare" aria-label="Aggiungi una cosa da fare" aria-describedby="bottone-aggiungi"/>
          <button className="btn btn-primary" type="button" id="bott-aggiungi" onClick={addNewItem}>aggiungi</button>
        </div>
        
        <ul className="list-group">
            {
              todos.map( todo => { 
                return <TaskItem key={todo.id} data={todo}></TaskItem>
              })
                
                
            }
           
        </ul> */}

    </main>
    </div>
  );
}

export default App;
