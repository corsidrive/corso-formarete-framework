export default function SearchBar(props) {
    return (
        <div className="input-group my-3">
        {/* <h1>{props.pippo} colore: {props.colore}</h1> */}
          <input type="text" className="form-control" placeholder="Aggiungi una cosa da fare" aria-label="Aggiungi una cosa da fare" aria-describedby="bottone-aggiungi"/>
          <button className="btn btn-primary" type="button" id="bott-aggiungi">{props.buttonLabel}</button>
        </div>
    )
}