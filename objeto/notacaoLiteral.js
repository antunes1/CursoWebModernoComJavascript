const a = 1
const b = 2
const c = 3

//
const obj = {a: a, b: b, c: c}
const obj2 = {a, b, c}
console.log(obj, obj2)

// criar dinamicamente um atributo no objeto,usando um string
// nome de um atributo chamado nota
const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)// nota: 7.87

//
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4) // nota: 7.87

//mudança de como função em um objeto literal - E6
// obj5 - jeito antigo de declara , chave e valor
// obj5 , funcao2 - novo jeito de declarar E6
const obj5 = {
    funcao1: function (){
        //...
    }, 
    funcao2(){
        //...
    }
}

console.log(obj5)
