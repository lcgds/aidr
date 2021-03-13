/*
    Crie um vetor de 50 posições, preencha com números aleatórios de 1 a 100 e exiba a média destes. Pesquise como gerar números aleatórios em TypeScript.
*/

let vetor: number[] = [];
let media: number = 0;

for (let contador: number = 0; contador < 50; contador++) {
    vetor[contador] = Math.round(Math.random() * (100 - 1) + 1);

    media += vetor[contador];
}

media = Math.round(media / vetor.length);

console.log(`Média dos valores inseridos no vetor: ${media}.`);