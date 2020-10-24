function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1+ imposto)}`
}

// obj ele vai criar um atributo getPreco e vai se associar ao getPreco da funçao
// da linha 1
const produto = {
    nome: 'Notebook', 
    preco: 4589, 
    desc: 0.15, 
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.20}

// call para chamar a funçao
console.log(getPreco.call(carro))
// apply
console.log(getPreco.apply(carro))

// a diferença de apply e call, e na passagem de parametros
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro,[0.17, '$']))
console.log(getPreco.apply(global,[0.17, '$']))
