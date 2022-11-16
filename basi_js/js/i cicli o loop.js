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

function tabellina(numero){
    // let numero = 5
    return function(element){
        return element * numero // 5
    }
}

const tabellina5 = numeri.map(tabellina(5))
console.log("tabellina 5",tabellina5)


const tabellina100 = numeri.map(tabellina(100))
console.log("tabellina 100",tabellina100)



function maggioreDi(numero){
// scrivi tua soluzione
}


// xROBY concatenare le funzioni
// numeri.filter(maggioreDi(1)).map(tabelllina(4)) 
numeri.filter(maggioreDi(1))
numeri.filter(maggioreDi(5))
numeri.filter(maggioreDi(100))








