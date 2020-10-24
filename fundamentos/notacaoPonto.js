console.log(Math.ceil(6.1))// ceill aredonda para o teto

const objs1= {}
objs1.nome = 'bola'
objs1.tel = 'tek'
//objs1['nome'] = 'bola2' / serve tanto para criar ou sobrescrever o que ja existe
console.log(objs1.tel)

function obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('exec....')
    }
}

const obj2 = new obj('cadeira')
const obj3 = new obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()