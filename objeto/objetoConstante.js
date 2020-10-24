// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'ana'
console.log(pessoa)

// pessoa -> 345  -> {...}
//pessoa = {nome: 'pedro'}

Object.freeze(pessoa)

pessoa.nome ='maria'
pessoa.end = 'rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
