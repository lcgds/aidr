import * as rs from 'readline-sync';

/*
    Escreva um algoritmo que leia os três números (possíveis lados de um triângulo) e imprima sua classificação quanto aos lados:
    a) Três lados iguais (equilátero)
    b) Dois lados iguais (isósceles)
    c) Três lados diferentes (escaleno)
*/

const ladoA: number = Number(rs.question("Digite o valor do lado A: "));
const ladoB: number = Number(rs.question("Digite o valor do lado B: "));
const ladoC: number = Number(rs.question("Digite o valor do lado C: "));

if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Classificação: triângulo equilátero.");
} else if (ladoA === ladoB || ladoB === ladoC) {
    console.log("Classificação: triângulo isósceles.");
} else {
    console.log("Classificação: triângulo escaleno.");
}