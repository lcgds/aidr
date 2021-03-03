"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
console.log('Exercício 4) Elabore um programa que permita ao usuário informar determinada temperatura em graus Celsius, converta e exiba seus respectivos valores em graus Kelvin e Fahrenheit.');
var celsius = Number(rs.question('Digite a temperatura em Celsius: '));
//Celsius -> Fahrenheit
var fahrenheit = (celsius * (9 / 5)) + 32;
//Celsius -> Kelvin
var kelvin = celsius + 273.15;
console.log(celsius + ' ºC = ' + fahrenheit + ' ºF');
console.log(celsius + ' ºC = ' + kelvin + ' K');
