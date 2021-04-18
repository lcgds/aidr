export class Game {
    id?: number;
    name: string;
    genre = '';
    platform = '';
    status = '';

    constructor(name: string) {
        this.name = name;
    }
}
