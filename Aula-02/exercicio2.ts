import * as rs from 'readline-sync';

//Faça um programa capaz de somar dois números digitados pelo usuário. Importante: o programa deverá solicitar continuamente a entrada de número até que um número válido seja digitado para cada um dos valores

let n1: number;

do {
    n1 = Number(rs.question("Insira o primeiro número: "));
} while (n1 === 0)

let n2: number;

do {
    n2 = Number(rs.question("Insira o segundo número: "));
} while (n2 === 0)

const re: number = n1 + n2;

console.log(`Resultado: ${re}.`);