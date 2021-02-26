import * as rs from 'readline-sync';

//Leia valores numéricos do usuário enquanto este digitar elementos positivos ou zero. Quando um número negativo for digitado, exiba todos os números pares inseridos.

let numeros: number[] = [];

let numeroInserido: number;

do {
    numeroInserido = Number(rs.question("Insira um número no array: "));
    numeros.push(numeroInserido);
} while (numeroInserido >= 0);

for (let numeroMostrado of numeros) {
    if (numeroMostrado % 2 === 0) {
        console.log(`${numeroMostrado}`);
    }
}