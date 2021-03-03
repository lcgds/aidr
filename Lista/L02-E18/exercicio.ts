import * as rs from 'readline-sync';

/*
    Leia 5 valores do usuário. Exiba todos os valores e indique o maior valor.
*/

let valor: number = 0;
let maior: number = 0;

for (let contador: number = 0; contador < 5; contador++) {
    valor = Number(rs.question("Digite um valor: "));
    console.log(valor);

    if (valor > maior) {
        maior = valor;
    }
}

console.log(`${maior} foi o maior valor digitado.`);