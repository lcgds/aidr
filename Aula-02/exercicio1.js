"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
// Escreva um programa em TypeScript que leia o valor de dois número inteiros e a operação aritmética desejada (adição, subtração, multiplicação e divisão) e calcule a resposta adequada.
var n1 = Number(rs.question("Insira o primeiro número: "));
var n2 = Number(rs.question("Insira o segundo número: "));
var op = rs.question("Digite a operação desejada (adição, subtração, multiplicação ou divisão): ");
var re;
switch (op) {
    case "adição":
    case "adicao":
    case "adiçao":
    case "adicão":
        re = n1 + n2;
        break;
    case "subtração":
    case "subtracao":
    case "subtraçao":
    case "subtracão":
        re = n1 - n2;
        break;
    case "multiplicação":
    case "multiplicacao":
    case "multiplicaçao":
    case "multiplicacão":
        re = n1 * n2;
        break;
    case "divisão":
    case "divisao":
        re = n1 / n2;
        break;
    default:
        console.log("Operação inválida!");
        break;
}
console.log("Resultado: " + re);
