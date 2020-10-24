function tratarErroELancar (erro) {
    // throw new error ('...')
    // throw 10;
    // throw true 
    // throw 'mensage'
    throw {
        nome: erro.name, 
        msg: erro.message, 
        date: new Date
    }
}

function imprimirNomeGritado (obj) {
    // try é um bloco que pode querar algum erro de problema
    try {
        console.log(obj.name.toUpperCase() + '!!!' )

    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'Roberto' }
imprimirNomeGritado(obj)