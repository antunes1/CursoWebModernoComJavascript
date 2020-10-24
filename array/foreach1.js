/**
 * forEach = metodo de percorrer o array
 * a funçao calback tem, tres parametros, primeiro nome, o indice, e o array
 */

 const aprovados = ['Agatha', 'rodrigo', 'Joao', 'Raquel']
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome} `)
}) 

aprovados.forEach(nome => console.log(nome))


