// função factory é uma função que retorna um objeto 

//factory simples 
function CriarPessoa() {
    return {
        nome: 'Ana', 
        sobrenome: 'Silva'
    }
}

console.log(CriarPessoa())