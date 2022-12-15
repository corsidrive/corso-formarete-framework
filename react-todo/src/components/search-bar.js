import { useState } from "react"

export default function SearchBar(props) {
    const  [newLabel,setNewLabel] = useState('')
    const  [tags,setTags] = useState('')
    const handleNewLabel = event => {
      setNewLabel(event.target.value)
      // console.log(event.target.value,newLabel)
    }

    const handleClick = () => {
        console.log("handleClick",newLabel)
        props.onBottoneAggiungiPremuto(newLabel,tags) 
    }

    const deleteTag = (tagToRemove) => { 

        return (event) => {
          const tagsArray = tags.split(",")
          const newTags = tagsArray.filter(t => t !== tagToRemove).join(",")
  
  
          console.log(newTags)
          setTags(newTags)
        }

    }

    const handletags = (event) => {
        setTags(event.target.value)
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
        <div className="mb-3">
        <input id="tags" 
                 
                 value={tags} 
                 onChange={handletags}
                 
                 type="text" 
                 className="form-control" 
                 placeholder="Aggiungi una cosa da fare" 
                 aria-label="Aggiungi una cosa da fare" 
                 aria-describedby="bottone-aggiungi"/>
                
                {tags.length} - {tags.split(",").filter(i => i !='').map((i)=> (<b key={i} className="badge bg-primary me-2">{i} <span onClick={deleteTag(i)}>X</span></b>))}
        </div>
        </>
    )
}

