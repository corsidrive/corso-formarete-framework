import { useState } from "react"

export default function SearchBar(props) {
    const  [newLabel,setNewLabel] = useState('')
    const handleNewLabel = event => {
      setNewLabel(event.target.value)
      // console.log(event.target.value,newLabel)
    }

    const handleClick = () => {
        console.log("handleClick",newLabel)
        props.onBottoneAggiungiPremuto(newLabel) 
    }

    return (
      <>
      {/* fragment */}
        <div className="input-group my-3">
        {/* <h1>{props.pippo} colore: {props.colore}</h1> */}
          <input id="newLabel" 
                 
                 value={newLabel} 
                 onChange={handleNewLabel}
                 
                 type="text" 
                 className="form-control" 
                 placeholder="Aggiungi una cosa da fare" 
                 aria-label="Aggiungi una cosa da fare" 
                 aria-describedby="bottone-aggiungi"/>
          <button onClick={handleClick} className="btn btn-primary" type="button" id="bott-aggiungi">{props.buttonLabel}</button>
        </div>
        </>
    )
}

