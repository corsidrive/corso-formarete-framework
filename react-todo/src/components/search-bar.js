export default function SearchBar() {
    return (
        <div className="input-group my-3">
          <input type="text" className="form-control" placeholder="Aggiungi una cosa da fare" aria-label="Aggiungi una cosa da fare" aria-describedby="bottone-aggiungi"/>
          <button className="btn btn-primary" type="button" id="bott-aggiungi">aggiungi</button>
        </div>
    )
}