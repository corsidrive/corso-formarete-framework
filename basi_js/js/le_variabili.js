console.clear();

// ECMASCRIPT prima delll 2015 | ES6
// DICHIARAZIONE
var indirizzo 
// ASSEGNAZIONE
indirizzo = "via qui"

var indirizzo = "via la"

console.log("---------")


// $oggetto->proprieta

// non può essere RIDICHIARATA
// non può essere RIASSEGNATA
const nome = "Roberto"
// nome = "luca" // DA ERRORE

// non può essere RIDICHIARATA
let cognome = "Rossi"
cognome = "Verdi"

// console.log(cognome)
// bracket scope // scope legato alle parentesi
{
    let anni = 12
    // console.log(anni)
}

// VARIABILI  LOCALI e GLOBALI (scope / ambito)

// le variabili sono assegnate per riferimento

function somma(a,b) {
    let risultato = a + b 
    return risultato 
    
    console.log("non mi vedrai mai")
    return a + b 

}
// console.log("darà indefinito",a)

// console.log("la somma di 5 + 5",somma(5,5))
// console.log("la somma di 5 + 2",somma(5,2))

// console.clear()

const  saluto = "sono fuori dalll'isola (funzione)"

function prova() {
     
    // console.log(saluto)
    function torre(){
        // console.log(saluto)  
    }
    torre();
}

prova()
// console.log(saluto)

const  a = "b"
// a = "c" // DA ERRORE
/** ARRAY */

// const colori = new Array("rosso",'verde','blue')
const colori = ["rosso",'verde','blue']
colori.push("giallo")



console.log(colori);