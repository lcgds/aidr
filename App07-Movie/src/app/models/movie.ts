export class Movie {
    name: string;
    rating?: number;

    constructor(n: string, r: number) {
        this.name = n;
        this.rating = r;
    }
}
