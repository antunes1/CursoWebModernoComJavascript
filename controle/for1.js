let contador = 1

while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

for (let i = 0; i <= 10; i++) {
    console.log(`i = ${i}`)
}

// length - elemento do array
const notas = [6.7, 7.7, 9.8, 8.2, 7.4]
for (let i = 0; i < notas.length; i++){
    console.log(`nota ${notas[i]}`)
}