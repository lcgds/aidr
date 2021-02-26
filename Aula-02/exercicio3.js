"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
//Crie uma função para calcular se um número é positivo, negativo ou zero e permita chamá-la com um número digitado pelo usuário
var numero1 = Number(rs.question("Insira um número: "));
function positivoOuNegativo(numero) {
    if (numero === 0) {
        return "igual a 0";
    }
    else if (numero > 0) {
        return "positivo";
    }
    else {
        return "negativo";
    }
}
var resposta = positivoOuNegativo(numero1);
console.log("O n\u00FAmero digitado \u00E9 " + resposta + ".");
