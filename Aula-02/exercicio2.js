"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
//Faça um programa capaz de somar dois números digitados pelo usuário. Importante: o programa deverá solicitar continuamente a entrada de número até que um número válido seja digitado para cada um dos valores
var n1;
do {
    n1 = Number(rs.question("Insira o primeiro número: "));
} while (n1 === 0);
var n2;
do {
    n2 = Number(rs.question("Insira o segundo número: "));
} while (n2 === 0);
var re = n1 + n2;
console.log("Resultado: " + re + ".");
