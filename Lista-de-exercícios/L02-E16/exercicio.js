"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/*
    Solicite que o usuário preencha nomes até que ele digite “sair”. Exiba todos os nomes digitados em sequência.
*/
var insert = "";
while (insert !== "sair" && insert !== "Sair") {
    insert = rs.question("Digite um nome ou 'sair' para encerrar o algoritmo: ");
    if (insert !== "sair" && insert !== "Sair") {
        console.log("Ol\u00E1 " + insert + "!");
    }
}
