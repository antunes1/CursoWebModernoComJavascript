// Object.preventExtension - não da para adicionar novos atributos
const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'Borracha escola branca'
delete produto.tag 
console.log(produto)

// Object.seal - não da para adicinar nenhum valor ,ou exclui-lo , sá alterar 
const pessoa = {nome: 'juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)
