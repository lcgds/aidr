console.log('Exercício 2) Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final ponderada deste aluno. Considerar o peso das notas como 2, 3 e 5, respectivamente');

import * as rs from 'readline-sync';

let nota1: number = Number(rs.question('Digite a primeira nota: '));

let nota2: number = Number(rs.question('Digite a segunda nota: '));

let nota3: number = Number(rs.question('Digite a terceira nota: '));

let result: number = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / (2 + 3 + 5);

console.log('A média ponderada, de acordo com as notas inseridas, é igual a ' + result + '.');