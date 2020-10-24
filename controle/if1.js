// if = se

function SoBoaNoticia (nota) {
    // se a nota for igual ou maior 
    if (nota >= 7) {
        console.log("Aprovado " +  nota);
    }
}

SoBoaNoticia(8.1);
SoBoaNoticia(6.1);

function SoForVerdadeiroEuFalo (valor){
    if(valor){
        console.log('É verdadeiro ...' + valor)
    }
}

SoForVerdadeiroEuFalo ()
SoForVerdadeiroEuFalo (null)
SoForVerdadeiroEuFalo (undefined)
SoForVerdadeiroEuFalo (NaN)
SoForVerdadeiroEuFalo ('')
SoForVerdadeiroEuFalo (0)
SoForVerdadeiroEuFalo (-1)
SoForVerdadeiroEuFalo (' ')
SoForVerdadeiroEuFalo ('?')
SoForVerdadeiroEuFalo ([])
SoForVerdadeiroEuFalo ([1,2])
SoForVerdadeiroEuFalo ({})