import './App.css';
import SearchBar from './components/search-bar';

import TodoList from './db.json'

function clickHandler(event) {
      console.log(event)
}
// const TodoList = 
// console.log(TodoList);
function App() {

  return (
    <div className="App">
      <main className="container">
        <header className="p-3 bg-secondary text-center">
            <h1>Todo APP</h1>
        </header>
        
        <SearchBar />
        
        <ul className="list-group">
            {
              TodoList.todos.map( todo => <TaskItem /> )  
            }
           
        </ul>

    </main>
    </div>
  );
}

export default App;
