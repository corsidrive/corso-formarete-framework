import { useState } from "react"

export default function TaskItem(props) {
  const todo = props.data
  const badge = todo.tags.map(tag => <span key={tag} className="badge badge-primary bg-primary badge-pill">{tag.toLowerCase()} </span>)


  const [done,setDone]= useState(todo.done)
  /*
  Funzione di ordine superiore 
  https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
   */
  const handleEliminaTask = (idDelTodoDaEliminare) => {
    return (event) => props.onEliminaPremuto(idDelTodoDaEliminare)
  }
  const handleCheckDone = (event) => {
      setDone(event.target.checked)
      props.onCheckboxChange(event.target.id,event.target.checked)
  }

  return (
    <li key={todo.id} className={'list-group-item d-flex justify-content-between '+(done ? 'bg-secondary' : '' )}>
      <div className="left">
        <input 
          checked={done}
          onChange={handleCheckDone}
          className="form-check-input me-1"
          type="checkbox"
          id={todo.id}
        />

        <label className="form-check-label"
          htmlFor={todo.id}>
          {todo.label}
        </label>
        
      </div>
      <div className="right">
        {badge}
        <button className="btn btn-danger" onClick={handleEliminaTask(todo.id)}>elimina</button>
      </div>
    </li>
  )
}
