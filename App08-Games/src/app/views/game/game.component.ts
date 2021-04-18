import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GameService } from './../../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games = new Array<Game>();
  selectedGame?: Game;
  editMode = false;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.refresh();
  }

  private refresh(): void {
    this.games = this.gameService.read();
  }

  newGame(): void {
    this.selectedGame = new Game('');
  }

  editGame(game: Game): void {
    this.selectedGame = game;
    this.editMode = true;
  }

  saveGame(): void {
    if (this.selectedGame) {
      if (this.editMode === false) {
        this.gameService.create(this.selectedGame);
      } else {
        this.gameService.update(this.selectedGame);
      }

    }

    this.editMode = false;
    this.selectedGame = undefined;
    this.refresh();
  }

  removeGame(id?: number): void {
    if (id !== undefined) {
      this.gameService.delete(id);
      this.refresh();
    }
  }


}
