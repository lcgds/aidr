"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/* Um ano é bissexto se for divisível por 4 exceto os séculos, que são bissextos se forem múltiplos de 400. Escreva um programa que lê um ano e determina se este é bissexto. */
var ano = Number(rs.question("Digite o ano escolhido para verificar se é bissexto: "));
function bissexto(parametro) {
    if (parametro % 100 === 0) {
        // século
        if (parametro % 400 === 0) {
            return "século bissexto";
        }
        else {
            return "século não bissexto";
        }
    }
    else {
        // ano 
        if (parametro % 4 === 0) {
            return "ano bissexto";
        }
        else {
            return "ano não bissexto";
        }
    }
}
console.log(ano + " \u00E9 um " + bissexto(ano) + ".");
