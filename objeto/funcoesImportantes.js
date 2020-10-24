const pessoa = {
    nome:  'rebeca',
    idade: 21,
    peso: 50
}

//metodos de object 
console.log(Object.keys(pessoa)) //mostra as chaves
console.log(Object.values(pessoa)) // mostra os valores
console.log(Object.entries(pessoa)) 

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
}) 

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // esta propriedade pode ser listada, 
    writable: false, // essa propriedade vai aceitar se alterada
    value:  01/02/2019
}) 

// Object.assign (ECMAScript 2015)
const dest = { a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a:4}
const obj = Object.assign(dest, o1, o2) //concatenação de objetos, os valores iram para dest
console.log(obj)

Object.freeze(objs)
obj.c = 1223

