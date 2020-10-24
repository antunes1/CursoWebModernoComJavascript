function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto === obj2.__proto)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! meu nome é ${this.nome} !`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//resumindo a locura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(Object.prototype.__proto__ === null )
// console.log(function.prototype.__proto__ === Object.prototype)
// console.log(MeuObjeto.__proto__ === function.prototype)
