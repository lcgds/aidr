import * as rs from 'readline-sync';

console.log('Exercício 4) Elabore um programa que permita ao usuário informar determinada temperatura em graus Celsius, converta e exiba seus respectivos valores em graus Kelvin e Fahrenheit.');

let celsius: number = Number(rs.question('Digite a temperatura em Celsius: '));

//Celsius -> Fahrenheit
let fahrenheit = (celsius * (9 / 5)) + 32;

//Celsius -> Kelvin
let kelvin = celsius + 273.15;

console.log(celsius + ' ºC = ' + fahrenheit + ' ºF');

console.log(celsius + ' ºC = ' + kelvin + ' K');