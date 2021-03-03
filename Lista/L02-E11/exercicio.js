"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/*
    Crie uma calculadora baseada em funções.
*/
function soma(numero1, numero2) {
    return numero1 + numero2;
}
function subtracao(numero1, numero2) {
    return numero1 - numero2;
}
function divisao(numero1, numero2) {
    return numero1 / numero2;
}
function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}
var numero1 = Number(rs.question("Digite o primeiro número a ser considerado no cálculo: "));
var numero2 = Number(rs.question("Digite o segundo número a ser considerado no cálculo: "));
var operacao = rs.question("Digite o operação (adição, subtração, multiplicação ou divisão) que deseja realizar: ");
switch (operacao) {
    case "adição":
    case "adicao":
    case "adiçao":
    case "adicão":
    case "+":
        console.log(numero1 + " + " + numero2 + " = " + soma(numero1, numero2));
        break;
    case "subtração":
    case "subtracao":
    case "subtraçao":
    case "subtracão":
    case "-":
        console.log(numero1 + " - " + numero2 + " = " + subtracao(numero1, numero2));
        break;
    case "multiplicação":
    case "multiplicacao":
    case "multiplicaçao":
    case "multiplicacão":
    case "*":
        console.log(numero1 + " * " + numero2 + " = " + multiplicacao(numero1, numero2));
        break;
    case "divisão":
    case "divisao":
    case "/":
        console.log(numero1 + " / " + numero2 + " = " + divisao(numero1, numero2));
        break;
    default:
        console.log("Operação inválida!");
        break;
}
