export default function TaskItem(props){
    const todo = props.data
    const badge = todo.tags.map(tag => <span key={tag} className="badge badge-primary bg-primary badge-pill">{tag.toLowerCase()} </span>) 
    
    /*
    Funzione di ordine superiore 
    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
     */
    const handleEliminaTask = (idDelTodoDaEliminare)=> {
      return (event) => {
        console.log("premuto id nel figlio:",idDelTodoDaEliminare)

        props.onEliminaPremuto(idDelTodoDaEliminare) // Cè il codice del componente padre 
        // 01 - creare la funzione di eliminazione nel componente parent (App.js)
        // 02 - usarla come props dentro il componente figlio (task-item.js)

      }
    }

    return (
        <li key={todo.id} className="list-group-item d-flex justify-content-between" onClick={clickHandler} >
          <div className="left">
            {/* {JSON.stringify(todo)} */}
              <input checked={todo.done} className="form-check-input me-1" type="checkbox" value="" id={todo.id}/>
              <label className="form-check-label" htmlFor={todo.id}>{todo.label } <b>fatto ?{todo.done}</b></label>
          </div> 
          <div className="right">
          {badge}
          <button className="btn btn-danger" onClick={handleEliminaTask(todo.id)}>elimina</button>  
          </div>  
        </li>
      )
}

function clickHandler(event) {
    console.log(event)
}