import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies = new Array<Movie>();

  selectedMovie?: Movie;

  constructor() {
    const alien = new Movie('Alien', 4);
    this.movies.push(alien);

    const parasite = new Movie('Parasite', 5);
    this.movies.push(parasite);
  }

  readMovie(object: Movie): void {
    this.selectedMovie = object;
  }

  createMovie(): void {
    this.selectedMovie = new Movie('', 1);
    this.movies.push(this.selectedMovie);
  }

  deleteMovie(i: number): void {
    this.movies.splice(i, 1);
  }

  ngOnInit(): void {
  }

}
