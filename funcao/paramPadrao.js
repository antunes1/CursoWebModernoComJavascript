function soma1 (a, b,c) {
 a = a || 1
 b = b || 1
 c = c || 1

 return a + b + c
}

console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0, 0, 0))

// Estrategia 2, 3, 4 para gerar valor padão
function soma2 (a, b, c) {
    // se o valor for diferente de undefined , 
    //vou usar operador ternario e 'a' vai ser igual á 1
    a = a !== undefined ? a : 1

    //perguntado se existe indice 1, se existir 
    // pegue o valor de b, se não pegue o valor  padrao 1
    b = 1 in arguments ? b : 1 

    // se for um numero ele pega o numero, senao asume o valor padrao 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0, 0, 0))

// Valor padrao es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

