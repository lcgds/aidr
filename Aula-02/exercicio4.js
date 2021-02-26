"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
//Leia valores numéricos do usuário enquanto este digitar elementos positivos ou zero. Quando um número negativo for digitado, exiba todos os números pares inseridos.
var numeros = [];
var numeroInserido;
do {
    numeroInserido = Number(rs.question("Insira um número no array: "));
    numeros.push(numeroInserido);
} while (numeroInserido >= 0);
for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
    var numeroMostrado = numeros_1[_i];
    if (numeroMostrado % 2 === 0) {
        console.log("" + numeroMostrado);
    }
}
