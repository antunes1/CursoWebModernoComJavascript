const pessoa = {
    saudacao: 'Bom dia', 
    falar () {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflitos de para diradigmas: Funcional

// bind é um metodo responsavel de amarar o objeto
// para ele se o dono da execução daquele metodo, 
// sempre que aquele metodo for chamado
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() 
