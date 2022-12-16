import { useState } from 'react';
import SearchBar from './components/search-bar';
import TaskItem from './components/task-item';
import TodoList from './db.json'
import { addTodo, removeTodo } from './service/TodoService';

export default function TodoApp(){
  const [todos,setTodos] = useState(TodoList.todos)
  
  const aggiungiNuovo = (label) => setTodos( todos => addTodo(todos,label))
  const eliminaTask = (idDaEliminare) => setTodos( oldtodo => removeTodo(oldtodo,idDaEliminare))
  
  const impostaDone = (idDaCambiare,nuovoStatoDiDone) => {
    console.log("padre",idDaCambiare,nuovoStatoDiDone)
    setTodos((oldtodos) => {
      const newtodos = [...oldtodos] // copia
      const index = newtodos.findIndex(todo => todo.id == idDaCambiare )
      newtodos[index].done = nuovoStatoDiDone
      return newtodos   
    })
  }

  return (
    <div className="App">
      <main className="container">
        <header className="p-3 bg-secondary text-center">
            <h1>Todo APP</h1>
        </header>
        
        <SearchBar onBottoneAggiungiPremuto={aggiungiNuovo}  buttonLabel="nuova task" />
        
        <ul className="list-group">
            {
              todos.map( todo => <TaskItem onEliminaPremuto={eliminaTask} 
                                           onCheckboxChange={impostaDone}
                                 data={todo}   key={todo.id} />)  
            }
           
        </ul>

        <pre>
        {JSON.stringify(todos,null,2)}
        </pre>
    </main>
    </div>
  );
}