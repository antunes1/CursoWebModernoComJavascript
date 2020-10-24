function compras (trabalho1, trabalho2) {
    const ComprarSorvete = trabalho1 || trabalho2;
    const ComprarTV50 = trabalho1 && trabalho2;
    //const ComprarTV32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const ComprarTV32 = trabalho1 != trabalho2;
    const ManterSaudavel = !ComprarSorvete;

    return {ComprarSorvete, ComprarTV50, ComprarTV32, ManterSaudavel}
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));

