const notas = [7.7, 3.6, 5.2, 8.9, 7.1, 6.5, 9.9]

// sem callback 
//push = serve para adicionar elementos no array
// criar um array só com notas baixo de 7
let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// Com callback
// filter - filtrar os elemento do array em cima de alguns criteiros
// umafunção que ira retornar true ou false
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

const NotasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(NotasMenorQue7)
console.log(notasBaixas3)