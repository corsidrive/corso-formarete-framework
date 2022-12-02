console.clear()
console.log("ciao")

//const months = ["January", "February", "March", "April", "May", "June", "July"];

//const random = Math.floor(Math.random() * months.length);
//console.log(random, months[random]);

const colori = ['primary','secondary','success']
// contiene diverse operazioni
let n = Math.random() * colori.length
n = Math.floor(n) 
colore = colori[n]
console.log(n,colore)


export function randomArray(array){
    let n = Math.random() * array.length
    n = Math.floor(n) 
    return  array[n]
};