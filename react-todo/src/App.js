import { useState } from 'react';
import './App.css';
import SearchBar from './components/search-bar';
import TaskItem from './components/task-item';
import TodoList from './db.json'


// const TodoList = 
// console.log(TodoList);
function App() {
  const [todo,setTodo] = useState([]) // [var,function]
  // const todo = useState()[0]
  // const setTodo = useState()[1]
  // hook -> funzioni che intercettano qualcosa
  MediaStreamAudioDestinationNode
  return (
    <div className="App">
      <main className="container">
        <header className="p-3 bg-secondary text-center">
            <h1>Todo APP</h1>
        </header>
        {/* const pippo = "ciao sono pippo" */}
        {/* <SearchBar colore={"rosso"} pippo={"ciao sono pippo"} /> */}
        <SearchBar buttonLabel="nuova task" />
        
        <ul className="list-group">
            {
              TodoList.todos.map( todo => <TaskItem data={todo}   key={todo.id} />)  
            }
           
        </ul>

    </main>
    </div>
  );
}

export default App;
