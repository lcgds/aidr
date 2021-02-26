"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/* Crie um programa que solicite ao usuário a digitação de um número. Informe então se este número é par ou ímpar. */
var number = Number(rs.question("Insira um número: "));
function parOuImpar(parametro) {
    if (parametro % 2 === 0) {
        return "par";
    }
    else {
        return "ímpar";
    }
}
console.log("O n\u00FAmero digitado \u00E9 " + parOuImpar(number) + ".");
