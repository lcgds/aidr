import { Injectable } from '@angular/core';
import { HQ } from '../model/hq';

@Injectable({
  providedIn: 'root'
})
export class HqService {

  private hqs = new Array<HQ>();

  private autoGeneratedId = 0;

  constructor() {
  }

  // CRUD

  create(game: HQ): void {
    game.id = this.autoGeneratedId;
    this.hqs.push(game);
    this.autoGeneratedId++;
    this.save();
  }

  read(): Array<HQ> {
    this.load();

    return this.hqs;
  }

  update(game: HQ): void {
    for (let i = 0; this.hqs.length; i++) {
      const g = this.hqs[i];
      if (g.id === game.id ) {
        this.hqs[i] = game;
        break;
      }
    }

    this.save();
  }

  delete(id: number): void {
    for (let i = 0; this.hqs.length; i++) {
      const game = this.hqs[i];
      if (id === game.id ) {
        this.hqs.splice(i, 1);
        break;
      }
    }

    this.save();
  }

  save(): void {
    localStorage.setItem('autoGeneratedId', this.autoGeneratedId.toString());

    const gamesJson = JSON.stringify(this.hqs);
    localStorage.setItem('hqs', gamesJson);
  }

  load(): void {
    const savedId = localStorage.getItem('autoGeneratedId');

    if (savedId) {
      this.autoGeneratedId = Number(savedId);
    }

    const savedHqs = localStorage.getItem('hqs');

    if (savedHqs) {
      this.hqs = JSON.parse(savedHqs);
    }
  }
}