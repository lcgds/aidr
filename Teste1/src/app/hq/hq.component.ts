import { Component, OnInit } from '@angular/core';
import { HQ } from '../model/hq';
import { HqService } from '../service/hq.service';

@Component({
  selector: 'app-hq',
  templateUrl: './hq.component.html',
  styleUrls: ['./hq.component.css']
})
export class HqComponent implements OnInit {

  hqs = new Array<HQ>();
  selectedHq?: HQ;
  createMode = false;
  editMode = false;

  constructor(private hqService: HqService) {}

  ngOnInit(): void {
    this.refresh();
  }

  private refresh(): void {
    this.hqs = this.hqService.read();
  }

  newHq(): void {
    this.createMode = true;
    this.editMode = false;
    this.selectedHq = new HQ('', '');
  }

  editHq(game: HQ): void {
    this.editMode = true;
    this.selectedHq = game;
  }

  saveHq(): void {
    if (this.selectedHq) {
      if (this.editMode === false) {
        this.hqService.create(this.selectedHq);
      } else {
        this.hqService.update(this.selectedHq);
      }

    }

    this.editMode = false;
    this.selectedHq = undefined;
    this.refresh();
  }

  removeHq(id?: number): void {
    if (id !== undefined) {
      this.hqService.delete(id);
      this.refresh();
    }
  }

}
