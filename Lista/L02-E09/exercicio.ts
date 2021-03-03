import * as rs from 'readline-sync';

/*
    Escreva um programa que solicita o nome e a altura de 5 atletas. Ao final da entrada de dados, informe O NOME do atleta mais alto.
*/

let nomeDoAtleta: string;
let altura: number;
let maiorAltura: number = 0;
let atletaMaisAlto: string;

for (let contador: number = 1; contador <= 5; contador++) {
    nomeDoAtleta = rs.question("Digite o nome do(a) atleta: ");
    altura = Number(rs.question(`Digite a altura do(a) atleta ${nomeDoAtleta} em centímetros: `));

    if (altura > maiorAltura) {
        atletaMaisAlto = nomeDoAtleta;
        maiorAltura = altura;
    }
}

console.log(`O(a) atleta com a maior altura se chama ${atletaMaisAlto} e tem ${maiorAltura / 100}m.`);