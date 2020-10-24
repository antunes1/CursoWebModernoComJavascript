class lancamento {
    constructor(nome, valor){
        this.nome = nome
        this.valor = valor
    
    }
}

class cicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes // adicionando ao objeto um valor
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos) { // recebe um o mais lançamentos e depois concatena
        // (forEach)percorrendo cada elemento do array, e (push)depois adicionando os elementos
            lancamentos.forEach(l => this.lancamentos.push(l)) }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor

        })
        return valorConsolidado
    }
}

          
const salario = new lancamento('ana', 45000)
const contaDeLuz = new lancamento('luz', -220)

const contas = new cicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())