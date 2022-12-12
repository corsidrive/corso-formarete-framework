import { useState } from "react"

export default function SearchBar(props) {
    const  [newLabel,setNewLabel] = useState('')
    //ììsetLabel( oldLabel => 'nuovo valore eticetta'+oldLabel);
    
    // quando il campo di testo cambia (sto scrivendo) anche  la variabile
    // newLabel label cambia 
    // campoditesto  <==> newLabel
    const handleNewLabel = event => {
      // console.log("handleNewLabel",event.target.value)
      setNewLabel(event.target.value)
    }

    const handleClick = () => {
        console.log("handleClick",newLabel)
        // aggiungi un elemento alla lista
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

