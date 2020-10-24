/**
 * callback conceito chamar de volta a função
 * 
 * passar uma função , e ela é chamada quando este evento acontecer
 * 
 */
 const fabricantes = ['Mercedes', 'Audi','BMW']

 const imprimir = function (nome, indice) {
     console.log(`${indice + 1}. ${nome} `)
 }

 // forEach - é um elemento do array
 fabricantes.forEach(imprimir)
 fabricantes.forEach(fabricante => console.log(fabricante))

