/**
 * while(enquanto) é um estrura de repetição 
 * enquanto for verdadeiro executa, so para quando a expressão for falsa
 * 
 */

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max -min) + min
    return Math.floor(valor)
}

let opcao = 0;

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre (-1, 10)
    console.log(`opção escolhida foi....  ${opcao}.`)
}

console.log('Até a proxima');