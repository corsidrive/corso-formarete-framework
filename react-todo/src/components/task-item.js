export default function TaskItem(props){
    const todo = props.data
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
}

function clickHandler(event) {
    console.log(event)
}