/**
atribuição referencia - trabalha com objetos e funçoes 

atribuição por valor - tipos primitivos
 */

let valor //nao iniciada
console.log(valor)

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toSring()) // erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undifined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null 
console.log(!!produto.preco)
console.log(produto)
