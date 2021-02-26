"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/*
    Dê o conceito do aluno conforme sua nota média, considerando:

    Entrada: 3 notas (números reais)
    Saída: Média das notase classificação, de acordo com a tabela abaixo:

    caso 8 <= média <= 10 → nota A
    caso 7 <= média < 8 → nota B
    caso 5 <= média < 7 → nota C
    caso 4 <= média < 5 → nota D
    caso 0 <= média < 4 → nota E
*/
function calculaNota() {
    //entrada
    var notas = [];
    var nota;
    var maxNotas = rs.question("Insira a quantidade de notas a ser considerada: ");
    for (var cont = 0; cont < maxNotas; cont++) {
        do {
            nota = Number(rs.question("Insira o valor da nota do aluno: "));
            notas.push(nota);
        } while (nota < 0 || nota > 10);
    }
    //saída
    var media = 0;
    for (var _i = 0, notas_1 = notas; _i < notas_1.length; _i++) {
        var elemento = notas_1[_i];
        media += elemento;
    }
    media = media / notas.length;
    console.log("A m\u00E9dia das notas inseridas \u00E9 igual a " + media + ".");
}
calculaNota();
