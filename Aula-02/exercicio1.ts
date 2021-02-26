import * as rs from 'readline-sync';

// Escreva um programa em TypeScript que leia o valor de dois número inteiros e a operação aritmética desejada (adição, subtração, multiplicação e divisão) e calcule a resposta adequada.

const n1: number = Number(rs.question("Insira o primeiro número: "));

const n2: number = Number(rs.question("Insira o segundo número: "));

const op: string = rs.question("Digite a operação desejada (adição, subtração, multiplicação ou divisão): ");

let re: number;

switch (op) {
    case "adição":
    case "adicao":
    case "adiçao":
    case "adicão":
        re = n1 + n2;
        break;
    case "subtração":
    case "subtracao":
    case "subtraçao":
    case "subtracão":
        re = n1 - n2;
        break;
    case "multiplicação":
    case "multiplicacao":
    case "multiplicaçao":
    case "multiplicacão":
        re = n1 * n2;
        break;
    case "divisão":
    case "divisao":
        re = n1 / n2;
        break;
    default:
        console.log("Operação inválida!");
        break;
}

console.log("Resultado: " + re);