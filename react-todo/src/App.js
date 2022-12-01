import './App.css';
import TodoList from './db.json'
// const TodoList = 
// console.log(TodoList);
function App() {
  return (
    <div className="App">
      <main className="container">
        <header className="p-3 bg-secondary text-center">
            <h1>Todo APP</h1>
        </header>
        
        <div className="input-group my-3">
          <input type="text" className="form-control" placeholder="Aggiungi una cosa da fare" aria-label="Aggiungi una cosa da fare" aria-describedby="bottone-aggiungi"/>
          <button className="btn btn-primary" type="button" id="bott-aggiungi">aggiungi</button>
        </div>
        
        <ul className="list-group">

            <li className="list-group-item">
              <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
              <label className="form-check-label" htmlFor="firstCheckbox">First checkbox</label>
            </li>
            
        </ul>

    </main>
    </div>
  );
}

export default App;
