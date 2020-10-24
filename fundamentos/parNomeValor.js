// par nome/valor
const  saudacao = 'opa' // valor léxico  1 
 function exec() {
     const saudacao = 'falaaa'// contexto lexico2 
     return saudacao

}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome:'Pedro',
    idade: 34,
    Peso: 89,
    endereço: {
        logradouro: 'rua muito lehal',
        numero: 233
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

