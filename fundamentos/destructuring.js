// novo recurso ES2015

const pessoa = {
    nome: 'ana',
    idade: 29,
    endereco: {
        logradouro: 'rua abc',
        numero: 1000
    }
}

//operador destructuring - extrai da=e uma estrutura 
const {nome, idade} = pessoa
console.log(nome, idade) 

const {nome: n , idade: i} = pessoa
console.log(n,i)

const {Sobrenome, BemHumorada = true} = pessoa
console.log( Sobrenome, BemHumorada)

const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)