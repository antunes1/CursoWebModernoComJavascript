// acessar o atributo pai '__proto__'
const ferrari = { 
    modelo: 'V40',
    Vmax: 324
}

const volvo = {
    modelo: 'F40',
    vlMax: 200
}

console.log(ferrari.prototype) //undefined
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype === null)

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)
