"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/*
    Escreva um programa que exiba qualquer tabuada completa:
    a.O programa deve perguntar ao usuário qual tabuada ele deseja visualizar.
    b.O usuário deverá responder digitando um número de 1 a 10.

*/
var tabuada;
do {
    tabuada = Number(rs.question("Digite um número entre 1 e 10 para exibir sua tabuada: "));
} while (tabuada < 1 || tabuada > 10);
for (var contador = 1; contador <= 10; contador++) {
    console.log(tabuada + " x " + contador + " = " + tabuada * contador);
}
