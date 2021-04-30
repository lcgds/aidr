/*
    Implemente um CRUD de HQs (revistas em quadrinhos) usando um componente e um serviço. O CRUD deve permitir gerenciar as informações do item de negócio (inserir, excluir, alterar, listar) através de uma interface visual. O item de modelo desse CRUD deve ter ao menos 5 atributos e deve ser persistido em local storage.
*/

export class HQ {
    id?: number;
    name: string;
    author: string;
    publisher: string = ''; 
    language: string = '';

    constructor(name: string, author: string) {
        this.name = name;
        this.author = author;
    }
}