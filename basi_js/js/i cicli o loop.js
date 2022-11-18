console.clear()

const colori = ["red","green","blue"]

for (let i = 0; i < colori.length; i++) {
    const colore = colori[i];
    console.log(colore)
} 

const numeri = [1,2,3,4,5,6,7,8,9,10]
const risultato = []

// Imperativo
for (let i = 0; i < numeri.length; i++) {
    const numero = numeri[i];
    risultato.push(numero*2)
}

// console.log("ciclo for",risultato)



function moltiplicaPer2 (element){
    return element * 2
}
// Dichiarativo
// MAP è un metodo che trasforma tutti i valori contenuti nell'array

const risultatoMap = numeri.map(moltiplicaPer2)

// console.log("con il metodo map",risultatoMap)

function numeriMaggioriDi5(element){
    return element > 5    
}

const risultatoDelFiltro = numeri.filter(numeriMaggioriDi5)

// console.log("applico filter",risultatoDelFiltro)

console.log(moltiplicaPer2)

// FUNZIONE DI ORDINE SUPERIORE 

// somma = 5 + 5 --> 10

function tabellina(moltiplicatore){
    // let moltiplicatore = 5
    return function(element){
        return element * moltiplicatore // 5
    }
}

const tabellina5 = numeri.map(tabellina(5))
console.log("tabellina 5",tabellina5)


const tabellina100 = numeri.map(tabellina(100))
console.log("tabellina 100",tabellina100)


// Soluzione
function maggioreDi(soglia){
// scrivi tua soluzione
        return function(element) {
            return element > soglia
        }
}

// xROBY concatenare le funzioni
// numeri.filter(maggioreDi(1)).map(tabelllina(4)) 
const resMagg1 = numeri.filter(maggioreDi(1))
console.log(resMagg1)
console.log(numeri.filter(maggioreDi(5)))
console.log(numeri.filter(maggioreDi(100)))


const per5magg33 = numeri.map(tabellina(5)).filter(maggioreDi(10))

console.log(per5magg33);

// console.clear()

numeri.filter(maggioreDi(33))
const prova = numeri.filter(maggioreDi(4)).map(tabellina(5))
console.log(prova)









