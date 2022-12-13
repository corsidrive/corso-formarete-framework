import { useState } from "react"

export default function Anagrafica(){
    const [nome,setNome] = useState('roby')
    const [cognome,setCognome] = useState('')

    function onNomeChange(event) {
            setNome(event.target.value)
    }

    const isRequired = (value) => (value.length > 0) 

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
            <button className="btn btn-primary"  disabled={true}  onClick={()=>alert("ciccio")}>invia</button>
        </section>
    )
}