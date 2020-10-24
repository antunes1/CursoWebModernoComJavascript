const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit Lapis", "preco": 41.22 }',
    '{"nome": "caneta", "preco": 7.50}' 
]

//Retorna um array apenas com os preços
const paraObjeto = json => JSON.parse(json) // transforma em objeto
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

