// Armazendo uma função em uma variavel 

const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2,3)

// Armazenando uma função arrow em uma variavel 

const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

// return imprícito
const subtração = (a, b) => a - b
console.log(subtração(5, 4))

const imprimi2 = a => console.log(a)
imprimi2('legal!!!')

