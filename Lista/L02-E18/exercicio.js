"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/*
    Leia 5 valores do usuário. Exiba todos os valores e indique o maior valor.
*/
var valor = 0;
var maior = 0;
for (var contador = 0; contador < 5; contador++) {
    valor = Number(rs.question("Digite um valor: "));
    console.log(valor);
    if (valor > maior) {
        maior = valor;
    }
}
console.log(maior + " foi o maior valor digitado.");
