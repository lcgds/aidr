import * as rs from 'readline-sync';

/*
    Escreva uma função que recebe um valor em dólares e é capaz de retornar o valor em reais. Esta função deverá chamar outra função capaz de retornar o valor de um dólar em reais (câmbio). Permita que o usuário chame a função de cálculo do valor de dólares em reais, informando um valor.
*/

// função capaz de retornar o valor de um dólar em reais (câmbio)
function cambioDolarReal(): number {
    return 5.68;
}


//função que recebe um valor em dólares e é capaz de retornar o valor em reais
function converteDolarReal(valor: number): number {
    return valor * cambioDolarReal();
}


// usuário chame a função de cálculo do valor de dólares em reais, informando um valor
let valor: number = Number(rs.question("Digite um valor a ser convertido (USD para BRL): "));
console.log(`${valor} Dólar(es) americano(s) = ${converteDolarReal(valor)} Real(is) brasileiro(s).`);