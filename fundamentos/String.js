
/**
 * cadeia de caracteres po
 * pode ser delimita por aspa simpres 
 * ou aspas duplas e clases
 * 
 */

 const escola = 'Cod3r'

// aplicando funçoes tipo string
 console.log(escola.charAt(4)) // me retornaa letra que se encontra no indice(4)
 console.log(escola.charAt(5)) // nada
 console.log(escola.charCodeAt(3)) // pega o valor da tabela unicode
 console.log(escola.indexOf('3'))// mostra oindiceque se encontra

 console.log(escola.substring(1));
 console.log(escola.substring(0, 3));

 console.log('escola '.concat(escola).concat('!')) // concatenação
 console.log('Escola ' + escola + '!');
 console.log(escola.replace(3, 'e')); // substituir 
 console.log('ana, maria , Pedro'.split(',')); // tranforma em um array