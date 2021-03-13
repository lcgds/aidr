import * as rs from 'readline-sync';

/*
    Solicite que o usuário preencha nomes até que ele digite “sair”. Exiba todos os nomes digitados em sequência.
*/

let insert: string = "";

while (insert !== "sair" && insert !== "Sair") {
    insert = rs.question("Digite um nome ou 'sair' para encerrar o algoritmo: ");

    if (insert !== "sair" && insert !== "Sair") {
        console.log(`Olá ${insert}!`);
    }
}