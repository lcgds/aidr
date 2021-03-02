"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
/*
    Crie uma função capaz de ler e retornar o nome do usuário. Através de outra função, capaz de imprimir um valor no console, exiba o nome do usuário.
*/
function leNome() {
    var nome = rs.question("Digite o seu nome: ");
    return nome;
}
function exibeNome(nome) {
    console.log("Ol\u00E1 " + nome + "!");
}
exibeNome(leNome());
