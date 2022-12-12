import { useState } from 'react';
import './App.css';
import SearchBar from './components/search-bar';
import TaskItem from './components/task-item';
import TodoList from './db.json'
import { addTodo, removeTodo, toggleTodo } from './service/TodoService';


// const TodoList = 
// console.log(TodoList);
function App() {
  const [todos,setTodos] = useState(TodoList.todos) // [var,function]
  // const todo = useState()[0]
  // const setTodo = useState()[1]
  // hook -> funzioni che intercettano qualcosa
  const aggiungiNuovo = (label) => {
      setTodos((todos)=>{
        const nuovoElenco = addTodo(todos,label)
        console.log(nuovoElenco)
        return nuovoElenco
      })
  }

  const eliminaTask = (idDaEliminare) => {
      // setTodos // usare la funzione di  TodoService 
      console.log("sono nel componente parent ",idDaEliminare)
      setTodos((oldtodo)=>{
          return removeTodo(oldtodo,idDaEliminare)
      })
  } 

  const setFatto = (idDaModificare,value) => {

      console.log("setFatto",idDaModificare);
      setTodos((old)=>{
          const newTodo = [...old]
          const index = newTodo.findIndex(i => i.id == idDaModificare)
          newTodo[index].done = value
          return newTodo
      })
      // setTodos((oldtodo)=>{
      //   return toggleTodo(oldtodo,idDaModificare)
      // })
  }

  return (
    <div className="App">
      <main className="container">
        <header className="p-3 bg-secondary text-center">
            <h1>Todo APP</h1>
        </header>
        {/* const pippo = "ciao sono pippo" */}
        {/* <SearchBar colore={"rosso"} pippo={"ciao sono pippo"} /> */}
        <SearchBar onBottoneAggiungiPremuto={aggiungiNuovo}  buttonLabel="nuova task" />
        
        <ul className="list-group">
            {
              todos.map( todo => <TaskItem
                                  onChecked={setFatto}     
                                  onEliminaPremuto={eliminaTask} 
                                 data={todo}   key={todo.id} />)  
            }
           
        </ul>

    </main>
    </div>
  );
}

export default App;
