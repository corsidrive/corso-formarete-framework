import { useState } from "react"

export default function SearchBar(props) {
    const  [newLabel,setNewLabel] = useState('Comprare il latte')
    //ììsetLabel( oldLabel => 'nuovo valore eticetta'+oldLabel);
    
    const handleNewLabel = event => {
      console.log("handleNewLabel",event.target.value)
      setNewLabel(event.target.value)
    }

    return (
      <>
      {/* fragment */}
          {newLabel}
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
          <button className="btn btn-primary" type="button" id="bott-aggiungi">{props.buttonLabel}</button>
        </div>
        </>
    )
}

