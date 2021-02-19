"use strict";
exports.__esModule = true;
//Importar ReadLine-Sync
var rs = require("readline-sync");
//Declarar variáveis
var message = 'Olá, mundo! Meu número preferido é ';
var favNumber = 6;
var flag = true;
var anything;
//Imprimir no console
console.log(message + favNumber + '.');
//Teste de ReadLine-Sync
var name = rs.question('Digite seu nome: ');
console.log('Olá, ' + name + '!');
