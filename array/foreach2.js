//implementação do forEach
/**criamos uma função no prototype do array chamado foreach2 
 * 
 */
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) { // acesso a instancia de um array apartir do this
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'rodrigo', 'Joao', 'Raquel']
aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome} `)
}) 


