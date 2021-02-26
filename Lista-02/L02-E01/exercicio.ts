import * as rs from 'readline-sync';

/* Crie um programa que solicite ao usuário a digitação de um número. Informe então se este número é par ou ímpar. */

const number: number = Number(rs.question("Insira um número: "));

function parOuImpar(parametro: number): string {
    if (parametro % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

console.log(`O número digitado é ${parOuImpar(number)}.`);