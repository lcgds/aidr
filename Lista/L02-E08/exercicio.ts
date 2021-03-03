import * as rs from 'readline-sync';

/*
    Escreva um programa que solicita 10 números e ao final exibe a soma de todos eles.
*/

let numeros: number = 0;

for (let contador: number = 1; contador <= 10; contador++) {
    numeros += Number(rs.question("Digite um número para incluí-lo na soma: "));
}

console.log(`Soma de todos os número digitados = ${numeros}`);