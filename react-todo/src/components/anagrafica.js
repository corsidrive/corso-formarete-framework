import { isValidElement, useState } from "react"

export default function Anagrafica(props){
    const [nome,setNome] = useState('roby')
    const [cognome,setCognome] = useState('')

    
    function onNomeChange(event) {
        setNome(event.target.value)
    }
    
    const isName = (value) => {
        const re = /^[a-zA-Z -]+$/g
        return re.test(value)
    }
    // console.log(isName)
    const isRequired = (value) => {
                            // console.log(value.trim().length > 0,isName(value),value);
                            return (value.length > 0) && isName(value)
                        } 

    function onClickHandler() {
        console.log("onClickHandler")
        const info = {}
        info.nome = nome 
        info.cognome = cognome 
        props.onAnagraficaCompletata(info)
    } 

    return (
        <section>
            <div className="m-3">               
                <label className="form-label">nome</label>
                <input type="text" className={'form-control ' + (isRequired(nome) ? 'is-valid':'is-invalid') } 
                
                value={nome} 
                onChange={onNomeChange}
                />
                <span className={'badge ' + (isRequired(nome) ? 'bg-success':'bg-danger')}>{nome.length}</span>
                

                {/* <div className="invalid-feedback">nome obbligatorio </div> */}
            </div>
            <div className="m-3">
                <label className="form-label">cognome {cognome}</label>
                <input className="form-control" type="text" 
                 value={cognome} 
                 onChange={ event => setCognome(event.target.value)}
                 />
            </div>
            {!(isRequired(nome) && isRequired(cognome)) ? "vero" : "false"} 
            <button className="btn btn-primary"  disabled={!(isRequired(nome) && isRequired(cognome))}  
            onClick={onClickHandler}>invia</button>
        </section>
    )
}