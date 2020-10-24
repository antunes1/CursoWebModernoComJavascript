console.log('1)', '1' == 1) // não compara o tipo, só o valor
console.log('2)', '1' === 1) // compara o valor e o tipo
// são diferentes que !=, !==
console.log('3)', '3' != 3) 
console.log('4)', '3' !== 3)

console.log('5)', 3 < 2) // tres é menor que 2
console.log('1)', 3 > 2) // 3 é maior que 2
console.log('1)', 3 <= 2) // 3 é menor ou igual 2
console.log('1)', 3 >= 2) // 3 é maior ou igual 2

const d1 = new Date(0) // data de referência do js 
const d2 = new Date(0)
console.log('9)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() == d2.getTime())

console.log('12)', undefined == null )
console.log('13)', undefined === null)

