"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
console.log('Exercício 3) Elabore um programa capaz de ler a base e a altura de um triângulo para, em seguida, escrever a sua área.');
var b = Number(rs.question('Digite o valor da base do triângulo: '));
var h = Number(rs.question('Digite o valor da altura do triângulo: '));
var A = (b * h) / 2;
console.log('A área do triângulo, de acordo com as medidas de base e altura inseridas, é igual a ' + A + '.');
