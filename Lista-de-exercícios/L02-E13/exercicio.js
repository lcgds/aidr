"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/*
    Crie uma função com dois parâmetros numéricos capaz de verificar qual número é o maior e retorná-lo.
*/
function qualEhMaior(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    }
    else {
        return numero2;
    }
}
var numero1 = Number(rs.question("Digite o primeiro número a ser considerado na comparação: "));
var numero2 = Number(rs.question("Digite o segundo número a ser considerado na comparação: "));
console.log(qualEhMaior(numero1, numero2) + " \u00E9 o maior n\u00FAmero.");
