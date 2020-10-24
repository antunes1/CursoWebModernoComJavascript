class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

// difinir que uma classe tem um prototipo
class Pai extends Avo {
    constructor (sobrenome, profissao = 'professor'){
        super(sobrenome) // 'super' -instaciar a funcao construtora da classe
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)

