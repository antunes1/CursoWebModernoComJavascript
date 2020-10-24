/**
 * se  (min for maior que o max inverta 
 * a varialvel 
 * 
 */

function rand ([min = 0, max = 1000]) {
    // / destructing = nova array
    if (min > max) [min, max] =[max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // arredonda para cima

}

console.log(rand([50, 40]))
console.log(rand([992])) // passando o primeiro valor(min)
console.log(rand([, 10])) 
console.log(rand([]))
//console.log(rand()) // vai dar undefined 


