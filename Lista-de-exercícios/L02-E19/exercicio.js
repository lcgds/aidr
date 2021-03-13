"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/*
    Colete 3 números do usuário, coloque-os em um vetor e exiba-o. Em seguida, modifique o array de forma que a sequência de números fique do contrário (se digitou 1,2,3, exiba 3,2,1).
*/
var vetor = [];
for (var contador = 0; contador < 3; contador++) {
    vetor[contador] = Number(rs.question("Digite um número: "));
}
for (var contador = 0; contador < 3; contador++) {
    console.log(vetor[contador]);
}
console.log("------");
for (var contador = 2; contador >= 0; contador--) {
    console.log(vetor[contador]);
}
