import * as rs from 'readline-sync';

/*
    Crie uma função com dois parâmetros numéricos capaz de verificar qual número é o maior e retorná-lo.
*/

function qualEhMaior(numero1: number, numero2: number): number {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}

let numero1: number = Number(rs.question("Digite o primeiro número a ser considerado na comparação: "));

let numero2: number = Number(rs.question("Digite o segundo número a ser considerado na comparação: "));

console.log(`${qualEhMaior(numero1, numero2)} é o maior número.`);