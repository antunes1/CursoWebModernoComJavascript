const pai = {nome: 'Pedro', corCabelo: 'preto'}

//crio um objeto novo, dado como parametro objeto pai
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', enumerable: true, writable: false}
})
console.log(filha2.nome)
filha2.nome = 'Carla'
console.log (`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// ela tem, aquelapropriedade pertence a ela
for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`por herança: ${key}`)
}
// ver se o atributo pertence ao objeto, ou ele vei por herança