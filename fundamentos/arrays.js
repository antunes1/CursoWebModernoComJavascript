/**arrays é um vetor
 * e ele é dinamico, porque ele cresce e diminui o tamanho
 * é uma estrutura indexada, pois pode misturas valores, mas não é uma boa pratica misturar valores
 * ele tambem não tem um tamanho fixo, e é heterogeneo  */
const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3])
console.log(valores[4])

valores [4] = 10
console.log(valores)
console.log(valores.length) // diz quantos elementos tem

// adicionar novos elementos a array
valores.push({id: 3 }, false, null, 'texto')
console.log(valores)

//excluir elementos da array
console.log(valores.pop())// exclui o ultimo elemento da array
delete valores[0]
console.log(valores)

console.log(typeof valores)