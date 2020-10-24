/**
 * função é um bloco de codigo
 * 
 * pode chamar a função quantas vezes quiser
 * 
 */

// funcao sem retorno
 function imprimirSoma(a, b){
     console.log(a + b);
 }

 imprimirSoma(1, 2)
 imprimirSoma(2)
 imprimirSoma(3,4,5,6,7,8)

//função com retorno

function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())