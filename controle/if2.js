function Teste1 (num){

    if(num > 7)
        console.log(num) 

    console.log('final')
}

Teste1 (6)
Teste1 (8)

function Teste2 (num){
    if (num > 7); { // cuidado com o ;, não usar com as estruturas  de controle
        console.log(num)
    }
}

Teste2 (8)
Teste2 (6)