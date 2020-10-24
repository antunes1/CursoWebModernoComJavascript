/**
 * array éum object
 * é uma estrutura indexada[...]
 */

 console.log(typeof Array, typeof new Array, typeof [])

 let aprovados = new Array('Bia', 'Ana', 'Carlos')
 console.log(aprovados)

 aprovados = ['Bia', 'Carlos', 'Ana']
 console.log(aprovados[0])
 console.log(aprovados[1])
 console.log(aprovados[2])
 console.log(aprovados[3])// undefined

 aprovados[3] = 'Paulo'
 aprovados.push('Abia')
 console.log(aprovados.length) //length tamanho do array

 aprovados[9] = 'Rafael'
 console.log(aprovados.push)
 console.log(aprovados[8] === undefined)

 console.log(aprovados)
 aprovados.sort() // altera do array, ordenando
 console.log(aprovados)

 delete aprovados[1]
 console.log(aprovados[1])
 console.log(aprovados[2])

 aprovados = [ 'Bia', 'Carlos', 'Ana']
 aprovados.splice(1,1) // adiciona e remove novos elementos
 console.log(aprovados)