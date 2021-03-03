/*
    Crie um vetor de 50 posições, preencha com números aleatórios de 1 a 100 e exiba a média destes. Pesquise como gerar números aleatórios em TypeScript.
*/
var vetor = [];
var media = 0;
for (var contador = 0; contador < 50; contador++) {
    vetor[contador] = Math.round(Math.random() * (100 - 1) + 1);
    media += vetor[contador];
}
media = Math.round(media / vetor.length);
console.log("M\u00E9dia dos valores inseridos no vetor: " + media + ".");
