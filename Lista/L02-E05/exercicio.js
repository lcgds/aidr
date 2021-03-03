"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/*
    Escreva um algoritmo que leia os três números (possíveis lados de um triângulo) e imprima sua classificação quanto aos lados:
    a) Três lados iguais (equilátero)
    b) Dois lados iguais (isósceles)
    c) Três lados diferentes (escaleno)
*/
var ladoA = Number(rs.question("Digite o valor do lado A: "));
var ladoB = Number(rs.question("Digite o valor do lado B: "));
var ladoC = Number(rs.question("Digite o valor do lado C: "));
if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Classificação: triângulo equilátero.");
}
else if (ladoA === ladoB || ladoB === ladoC) {
    console.log("Classificação: triângulo isósceles.");
}
else {
    console.log("Classificação: triângulo escaleno.");
}
