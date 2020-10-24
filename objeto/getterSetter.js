// getter e setter são funçoes ,que dentro dessas funçoes esser valores sao acessados
const sequencia = {
    _valor: 1, //convenção 
    get valor() { return this._valor++}, 
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

sequencia.valor
console.log(sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
