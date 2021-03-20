import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.css']
})
export class Exercicio1Component implements OnInit {

  n1 = '';
  n2 = '';

  constructor() { }

  ngOnInit(): void {
  }

  somar(): number {
    return Number(this.n1) + Number(this.n2);
  }
}
