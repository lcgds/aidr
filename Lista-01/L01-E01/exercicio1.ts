console.log('Exercício 1) Implemente um algoritmo que leia três números e imprima na tela o produto (multiplicação) dos três números.');

import * as rs from 'readline-sync';

let number1: number = Number(rs.question('Digite o primeiro número: '));

let number2: number = Number(rs.question('Digite o segundo número: '));

let number3: number = Number(rs.question('Digite o terceiro número: '));

let result: number = number1 * number2 * number3;

console.log('O produto dos três números inseridos é igual a ' + result + '.');