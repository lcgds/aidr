/*
    Escreva um programa TypeScriptque exiba os números pares de 2 a 12 utilizando laços de repetição
*/

for (let contador: number = 2; contador <= 12; contador++) {
    if (contador % 2 === 0) {
        console.log(contador);
    }
}