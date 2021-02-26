import * as rs from 'readline-sync';

//Crie uma função para calcular se um número é positivo, negativo ou zero e permita chamá-la com um número digitado pelo usuário

const numero1: number = Number(rs.question("Insira um número: "));

function positivoOuNegativo(numero: number): string {
    if (numero === 0) {
        return "igual a 0";
    } else if (numero > 0) {
        return "positivo";
    } else {
        return "negativo";
    }
}

const resposta: string = positivoOuNegativo(numero1);
console.log(`O número digitado é ${resposta}.`);