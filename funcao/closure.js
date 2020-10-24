//Closure é o escopo criado quando uma função é declarada(é criado um escopo)
//Esse escopo permite a função acessar e manipular variaveis externas á função 

//contexto lexico em ação !

const x = 'Global'

function fora() {
    const x = 'local'
    function dentro() {
        return x 
    }
    return dentro 
}

const minhaFuncao = fora()
console.log(minhaFuncao())