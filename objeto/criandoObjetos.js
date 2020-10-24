// usando notação literal 
const obj1 = {}
console.log(obj1)

//object JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funçoes construtoras 
function produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 -  desc)
    }
        
}

const p1 = new produto('notebook', 2333.00, 0.15)
const p2 = new produto('Ipad', 1000, 0.20)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//função factory
function criandoFuncionario(nome, salarioBase, faltas ) {
    return {
        nome, 
        salarioBase, 
        faltas, 
        getSalario() {
            return  (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criandoFuncionario('joao', 7890,4)
const f2 = criandoFuncionario('Maria', 11400, 1)
console.log(f1.getSalario())
console.log(f2.getSalario())

//objet.create
const filho = Object.create(null)
filho.nome = 'joao'
console.log(filho)

//funcao famosa que retorna objeto...
const fromJson = JSON.parse('{"info": "sou um json"}')
console.log(fromJson.info)