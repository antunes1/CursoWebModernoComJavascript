/**
 * var tem escopo global e de funcção 
 * 
 * variaveis com a palavra resevarda let tem escopo global, de função e escopo de bloco.
 */

 let numero = 1
 {
     let numero = 2
     console.log('dentro = ', numero)
 }

console.log('fora = ',numero)