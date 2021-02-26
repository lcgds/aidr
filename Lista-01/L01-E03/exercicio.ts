import * as rs from 'readline-sync';

console.log('Exercício 3) Elabore um programa capaz de ler a base e a altura de um triângulo para, em seguida, escrever a sua área.');

let b: number = Number(rs.question('Digite o valor da base do triângulo: '));

let h: number = Number(rs.question('Digite o valor da altura do triângulo: '));

let A: number = (b * h) / 2;

console.log('A área do triângulo, de acordo com as medidas de base e altura inseridas, é igual a ' + A + '.');