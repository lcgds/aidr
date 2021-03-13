import * as rs from 'readline-sync';

/*
    Escreva uma função que é capaz de retornar se um número é ou não primo. Chame esta função passando um número do usuário.
*/

function ehPrimo(numero: number): string {
    // um número primo é aquele que é dividido apenas por um e por ele mesmo.

    let divisores: number = 0;

    for (let contador = numero; contador >= 1; contador--) {
        if (numero % contador === 0) {
            divisores++;
        }
    }

    if (divisores === 2) {
        return "é primo";
    } else {
        return "não é primo";
    }
}

const numero: number = Number(rs.question("Digite um número para verificar se é primo: "));
console.log(`${numero} ${ehPrimo(numero)}.`);