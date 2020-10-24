// cadeia de protótipos (prototype chain)

Object.prototype.Attr0 = '0'
const avô = {Atrr1: 'A'}
const pai = {__proto__: avô, Atrr2: 'B'}
const filho = {__proto__: pai,  Atrr3: 'C'}
console.log(filho.Attr0, filho.Atrr1, filho.Atrr2, filho.Atrr3)

const carro = {
    velAtual: 0, 
    velMax: 200,
    aceleraMais(delta){// delta - diferença de quanto vai acelerar
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta 
        }else {
            this.velAtual =  this.velMax
        }
        
    }, 
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    } 
}

const ferrari = {
    modelo: ' f40', 
    velMax:320, // shadowing
    
}

const volvo = {
    modelo: ' v40', 
     status() {
         return `${this.modelo}: ${super.status()}` 
     }   
}

//setPrototype relacao de proto
Object.setPrototypeOf(ferrari, carro) //objeto, prototype 
Object.setPrototypeOf(volvo, carro)

volvo.aceleraMais(200)
console.log(volvo.status())
ferrari.aceleraMais(340)
console.log(ferrari.status())



