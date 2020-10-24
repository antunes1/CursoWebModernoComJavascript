/*  setInterval dispara outra função , 
de outra função que voce deixou */

function Pessoa(){

    this.idade = 0

    const Self = this
    setInterval(function (){
        Self.idade++
        console.log(Self.idade)

    }/*.bind(this)*/, 1000)// milesegundos , intervalo que ira ficar repetindo

}

new Pessoa
