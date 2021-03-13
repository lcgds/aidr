import * as rs from 'readline-sync';

/*
    Colete 3 números do usuário, coloque-os em um vetor e exiba-o. Em seguida, modifique o array de forma que a sequência de números fique do contrário (se digitou 1,2,3, exiba 3,2,1).
*/

let vetor: number[] = [];

for (let contador = 0; contador < 3; contador++) {
    vetor[contador] = Number(rs.question("Digite um número: "));
}

for (let contador = 0; contador < 3; contador++) {
    console.log(vetor[contador]);
}

console.log("------");

for (let contador = 2; contador >= 0; contador--) {
    console.log(vetor[contador]);
}