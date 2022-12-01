import './App.css';

function App() {
  return (
    <div className="App">
      <main class="container">
        <header class="p-3 bg-secondary text-center">
            <h1>Todo APP</h1>
        </header>
        
        <div class="input-group my-3">
          <input type="text" class="form-control" placeholder="Aggiungi una cosa da fare" aria-label="Aggiungi una cosa da fare" aria-describedby="bottone-aggiungi"/>
          <button class="btn btn-primary" type="button" id="bott-aggiungi">aggiungi</button>
        </div>
        
        <ul class="list-group">
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
              <label class="form-check-label" for="firstCheckbox">First checkbox</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
              <label class="form-check-label" for="secondCheckbox">Second checkbox</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
              <label class="form-check-label" for="thirdCheckbox">Third checkbox</label>
            </li>
          </ul>

    </main>
    </div>
  );
}

export default App;
