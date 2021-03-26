import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-ex02',
  templateUrl: './ng-for-ex02.component.html',
  styleUrls: ['./ng-for-ex02.component.css']
})
export class NgForEx02Component implements OnInit {

  countries = ['Uruguai', 'Canadá', 'Japão', 'Irlanda'];
  capitals = ['Montevideo', 'Vancouver', 'Tokyo', 'Dublin'];

  constructor() { }

  ngOnInit(): void {
  }

  getCapital(i: number) {
    alert(this.capitals[i]);
  }

}
