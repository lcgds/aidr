"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/*
    Escreva uma função que é capaz de retornar se um número é ou não primo. Chame esta função passando um número do usuário.
*/
function ehPrimo(numero) {
    // um número primo é aquele que é dividido apenas por um e por ele mesmo.
    var divisores = 0;
    for (var contador = numero; contador >= 1; contador--) {
        if (numero % contador === 0) {
            divisores++;
        }
    }
    if (divisores === 2) {
        return "é primo";
    }
    else {
        return "não é primo";
    }
}
var numero = Number(rs.question("Digite um número para verificar se é primo: "));
console.log(numero + " " + ehPrimo(numero) + ".");
