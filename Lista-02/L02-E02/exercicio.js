"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/* Elaborar uma questão de múltipla escolha, de uma disciplina que esteja cursando ou um tema de interesse, com um enunciado e cinco alternativas, sendo uma correta ou incorreta. Escrever um programa que mostra a questão na tela, pede a resposta correta e informa ao usuário se este acertou ou errou. */
console.log("Quais as maiores pandemias da história? \n A) Gripe espanhola e câncer \n B) Varíola e hipertensão \n C) Peste negra e covid-19 \n D) Cólera e colesterol \n E) Asma e Gripe espanhola");
var alternativa;
do {
    alternativa = rs.question("Insira a alternativa que julgar correta (A, B, C, D ou E): ");
} while (alternativa != "A" &&
alternativa != "B" &&
alternativa != "C" &&
alternativa != "D" &&
    alternativa != "E");
switch (alternativa) {
    case "A":
    case "B":
    case "D":
    case "E":
        console.log("Resposta incorreta!");
        break;
    case "C":
        console.log("Resposta correta!");
        break;
}
console.log("Justificativa: com exceção da alternativa 'C', em cada uma das alternativas consta apenas uma pandemia. Câncer, hipertensão, colesterol e asma não podem ser pandemias, porque não são doenças contagiosas.");
