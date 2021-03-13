import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise7',
  templateUrl: './exercise7.component.html',
  styleUrls: ['./exercise7.component.css']
})
export class Exercise7Component implements OnInit {
  classDiv1 = '';
  classDiv2 = '';
  classDiv3 = '';

  constructor() { }

  ngOnInit(): void {
  }

  trocarVisibilidade(div: number): void {
    if (div === 1) {
      this.classDiv1 = 'shown';
      this.classDiv2 = 'hidden';
      this.classDiv3 = 'hidden';
    } else if (div === 2) {
      this.classDiv1 = 'hidden';
      this.classDiv2 = 'shown';
      this.classDiv3 = 'hidden';
    } else {
      this.classDiv1 = 'hidden';
      this.classDiv2 = 'hidden';
      this.classDiv3 = 'shown';
    }

  }

}
