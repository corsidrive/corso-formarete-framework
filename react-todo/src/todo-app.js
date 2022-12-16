import { useState } from 'react';
import SearchBar from './components/search-bar';
import TaskItem from './components/task-item';
import TodoList from './db.json'
import { addTodo, removeTodo } from './service/TodoService';

export default function TodoApp(){
  const [todos,setTodos] = useState(TodoList.todos)
  
  const aggiungiNuovo = (label) => setTodos( todos => addTodo(todos,label))
  const eliminaTask = (idDaEliminare) => setTodos( oldtodo => removeTodo(oldtodo,idDaEliminare))
   

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
                                 data={todo}   key={todo.id} />)  
            }
           
        </ul>

    </main>
    </div>
  );
}