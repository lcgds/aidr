"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/*
    Escreva um programa que solicita 10 números e ao final exibe a soma de todos eles.
*/
var numeros = 0;
for (var contador = 1; contador <= 10; contador++) {
    numeros += Number(rs.question("Digite um número para incluí-lo na soma: "));
}
console.log("Soma de todos os n\u00FAmero digitados = " + numeros);
