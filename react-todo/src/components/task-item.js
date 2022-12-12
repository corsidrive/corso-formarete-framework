import { useState } from "react"

export default function TaskItem(props){
    const todo = props.data
    const badge = todo.tags.map(tag => <span key={tag} className="badge badge-primary bg-primary badge-pill">{tag.toLowerCase()} </span>) 
    
    const [fatto,setFatto] = useState(todo.done)
    
    /*
    Funzione di ordine superiore 
    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
     */
    const handleEliminaTask = (idDelTodoDaEliminare)=> {
      return (event) => {
        props.onEliminaPremuto(idDelTodoDaEliminare) // Cè il codice del componente padre 
      }
    }

    const utenteHaCambiatoLoStato = (id) => {
        setFatto( old =>!old)
        return (event) => {
          props.onChecked(id) 
        }
    }

    return (
        <li key={todo.id} className="list-group-item d-flex justify-content-between">
          <div className="left">
            {/* {JSON.stringify(todo)} */}
              <input checked={fatto} 
                     onChange={utenteHaCambiatoLoStato(todo.id)}
                     className="form-check-input me-1" 
                     type="checkbox" 
                     id={todo.id}/>
              <label className="form-check-label" htmlFor={todo.id}>
                {todo.id} - {todo.label} 
                ({todo.done ? "fatto":"da fare"})
                <b>{fatto ? "fatto":"da fare"}</b>
              </label>
              
          </div> 
          <div className="right">
          {badge}
          <button className="btn btn-danger" onClick={handleEliminaTask(todo.id)}>elimina</button>  
          </div>  
        </li>
      )
}

