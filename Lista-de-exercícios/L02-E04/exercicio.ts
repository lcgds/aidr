import * as rs from 'readline-sync';

/*
    Dê o conceito do aluno conforme sua nota média, considerando:

    Entrada: 3 notas (números reais)
    Saída: Média das notase classificação, de acordo com a tabela abaixo:

    caso 8 <= média <= 10 → nota A
    caso 7 <= média < 8 → nota B
    caso 5 <= média < 7 → nota C
    caso 4 <= média < 5 → nota D
    caso 0 <= média < 4 → nota E
*/



function calculaNota(): void {
    //entrada
    let notas: number[] = [];
    let nota: number;
    let maxNotas: number = rs.question("Insira a quantidade de notas a ser considerada: ");

    for (let cont: number = 0; cont < maxNotas; cont++) {
        do {
            nota = Number(rs.question("Insira o valor da nota do aluno: "))
            notas.push(nota);
        } while (nota < 0 || nota > 10)
    }

    //saída
    let media: number = 0;

    for (let elemento of notas) {
        media += elemento;
    }

    media = media / notas.length;
    console.log(`A média das notas inseridas é igual a ${media}.`)
}

calculaNota();