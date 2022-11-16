console.clear()

const colori = ["red","green","blue"]

for (let i = 0; i < colori.length; i++) {
    const colore = colori[i];
    console.log(colore)
} 

const numeri = [1,2,3,4,5,6,7,8,9,10]
const risultato = []

for (let i = 0; i < numeri.length; i++) {
    const numero = numeri[i];
    risultato.push(numero*2)
}

console.log(risultato)
