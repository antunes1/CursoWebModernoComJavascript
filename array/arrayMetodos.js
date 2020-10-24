const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Mass']
pilotos.pop() // remove o elemento da ultima posição 
console.log(pilotos)

pilotos.push('verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona na primeiro indice 
console.log(pilotos)

//splice pode adicionar e remover elementos

//adionar 
// splice (indice, )
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

// remove
pilotos.splice(3, 1, ) // massa quebrou !
console.log(pilotos)

// apartir do indice dois ele pega os elementos e cria um novo array
const algunsPiltos1 = pilotos.slice(2) // novo array
console.log(algunsPiltos1)

// indice quatro nao vai entrar, pq ele vai so pegar ate o indice quatro
const algunsPiltos2 = pilotos.slice(1, 4) 
console.log(pilotos)

