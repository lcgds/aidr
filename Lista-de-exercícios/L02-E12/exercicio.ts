import * as rs from 'readline-sync';

/*
    Crie uma função capaz de ler e retornar o nome do usuário. Através de outra função, capaz de imprimir um valor no console, exiba o nome do usuário.
*/

function leNome(): string {
    let nome = rs.question("Digite o seu nome: ");
    return nome;
}

function exibeNome(nome: string): void {
    console.log(`Olá  ${nome}!`);
}

exibeNome(leNome());