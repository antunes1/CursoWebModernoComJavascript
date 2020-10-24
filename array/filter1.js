/**
 * filtrar 
 * 
 */

 const produtos = [
     {nome: 'Notebook', preco: 2199, fragil: true}, 
     {nome: 'Ipad pro', preco: 4999, fragil: true }, 
     {nome: 'Copo de vidro', preco: 12.49, fragil: true}, 
     {nome: 'Copo de plastico', preco: 18.49, fragil: false}
 ]

 // p -representa cada um dos prudutos, os elementos
 console.log(produtos.filter(function(p) {
     return false
 }))

 const caro = produto => produto.preco >= 500
 const fragil = produto => produto.fragil
console.log(produtos.filter(caro).filter(fragil))
 