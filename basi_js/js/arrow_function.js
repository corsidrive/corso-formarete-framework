console.clear()
const colori =  ['red','green','yellow']

const res = colori.find(function(colore){
    return colore == 'red'
})


const res2 = colori.find((colore,index) => {
    return colore == 'red'
})

const res3 = colori.find( colore => {
    return colore == 'red'
})


const res4 = colori.find( colore => colore == 'red')
const res5 = colori.find( (colore,index) => colore == 'red' )


console.log("ho trovato",res,colori)