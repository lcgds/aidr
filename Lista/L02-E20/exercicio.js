"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/*
    Crie uma função que recebe um vetor e um número. A função deverá retornar todos os índices onde esse número aparece no vetor. Crie um vetor com números aleatórios, defina um número e execute a função, imprimindo todos os números e as posições onde o número selecionado aparece.
*/
var vetor = [];
for (var contador = 0; contador < 100; contador++) {
    vetor[contador] = Math.round(Math.random() * (100 - 1) + 1);
}
var numero = Number(rs.question("Digite o número a ser procurado no vetor: "));
function procurarValorEmVetor(valor, vetor) {
    var ocorrencias = 0;
    for (var contador = 0; contador < vetor.length; contador++) {
        if (vetor[contador] === numero) {
            console.log("Vetor[" + contador + "] = " + valor);
            ocorrencias++;
        }
    }
    if (ocorrencias === 0) {
        console.log("O valor " + valor + " n\u00E3o foi encontrado neste vetor.");
    }
}
procurarValorEmVetor(numero, vetor);
