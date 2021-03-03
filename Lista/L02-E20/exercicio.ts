import * as rs from 'readline-sync';

/*
    Crie uma função que recebe um vetor e um número. A função deverá retornar todos os índices onde esse número aparece no vetor. Crie um vetor com números aleatórios, defina um número e execute a função, imprimindo todos os números e as posições onde o número selecionado aparece.
*/

let vetor: number[] = [];

for (let contador: number = 0; contador < 100; contador++) {
    vetor[contador] = Math.round(Math.random() * (100 - 1) + 1);
}

let numero: number = Number(rs.question("Digite o número a ser procurado no vetor: "));

function procurarValorEmVetor(valor: number, vetor: number[]): void {
    let ocorrencias: number = 0;

    for (let contador: number = 0; contador < vetor.length; contador++) {

        if (vetor[contador] === numero) {
            console.log(`Vetor[${contador}] = ${valor}`);
            ocorrencias++;
        }
    }

    if (ocorrencias === 0) {
        console.log(`O valor ${valor} não foi encontrado neste vetor.`);
    }
}

procurarValorEmVetor(numero, vetor);