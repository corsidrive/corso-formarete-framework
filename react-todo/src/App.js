import './App.css';
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
        
        <div className="input-group my-3">
          <input type="text" className="form-control" placeholder="Aggiungi una cosa da fare" aria-label="Aggiungi una cosa da fare" aria-describedby="bottone-aggiungi"/>
          <button className="btn btn-primary" type="button" id="bott-aggiungi">aggiungi</button>
        </div>
        
        <ul className="list-group">
            {
              TodoList.todos.map( todo => {
                const badge = todo.tags.map(tag => <span key={tag} className="badge badge-primary bg-primary badge-pill">{tag.toLowerCase()} </span>) 
                
                return (
                  <li key={todo.id} className="list-group-item d-flex justify-content-between" onClick={clickHandler} >
                    <div className="left">
                        <input className="form-check-input me-1" type="checkbox" value="" id={todo.id}/>
                        <label className="form-check-label" htmlFor={todo.id}>{todo.label }</label>
                    </div> 
                    <div className="right">{badge}</div>  
                  </li>
                )
              })
                
                
            }
           
        </ul>

    </main>
    </div>
  );
}

export default App;
