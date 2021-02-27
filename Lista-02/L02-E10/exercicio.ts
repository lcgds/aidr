import * as rs from 'readline-sync';

/*
    Solicite que seja digitada uma palavra que contenha a letra F ou comece com a letra P (pesquisar métodos de manipulação de string em TypeScript se necessário).
*/

let palavra: string;

do {
    palavra = rs.question("Digite uma palavra que contenha a letra f ou que comece com a letra: ");
} while (
    palavra.search("F") === -1 &&
    palavra.search("P") !== 0 &&
    palavra.search("f") === -1 &&
    palavra.search("p") !== 0
)

console.log(`A palavra ${palavra} cumpriu os requisitos.`);