// arguments é um array interno de uma função
function soma () {
    let soma = 0 
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.3, 3.3))
console.log(soma(2.2,3.3, 2.1 , 'teste'))
console.log(soma('a', 'b', 'c'))