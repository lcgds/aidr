"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/*
    Escreva um programa que solicita o nome e a altura de 5 atletas. Ao final da entrada de dados, informe O NOME do atleta mais alto.
*/
var nomeDoAtleta;
var altura;
var maiorAltura = 0;
var atletaMaisAlto;
for (var contador = 1; contador <= 5; contador++) {
    nomeDoAtleta = rs.question("Digite o nome do(a) atleta: ");
    altura = Number(rs.question("Digite a altura do(a) atleta " + nomeDoAtleta + " em cent\u00EDmetros: "));
    if (altura > maiorAltura) {
        atletaMaisAlto = nomeDoAtleta;
        maiorAltura = altura;
    }
}
console.log("O(a) atleta com a maior altura se chama " + atletaMaisAlto + " e tem " + maiorAltura / 100 + "m.");
