// else - senão 
/**
 * if quando a expressão for verdadeira ,
 * e o else é usado quando a expressão for falsa
 * 
 */
const imprimirResultado = function (nota){
    if (nota > 7) {
        console.log('Aprovado!')
    } else { 
        console.log('Reprovado!')
    }
}

imprimirResultado (10);
imprimirResultado (6);
imprimirResultado ('opa!') // cuidado!!