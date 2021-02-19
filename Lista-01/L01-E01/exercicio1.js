"use strict";
exports.__esModule = true;
console.log('Exercício 1) Implemente um algoritmo que leia três números e imprima na tela o produto (multiplicação) dos três números.');
var rs = require("readline-sync");
var number1 = Number(rs.question('Digite o primeiro número: '));
var number2 = Number(rs.question('Digite o segundo número: '));
var number3 = Number(rs.question('Digite o terceiro número: '));
var result = number1 * number2 * number3;
console.log('O produto dos três números inseridos é igual a ' + result + '.');
