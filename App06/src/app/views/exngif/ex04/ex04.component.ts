import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex04',
  templateUrl: './ex04.component.html',
  styleUrls: ['./ex04.component.css']
})
export class Ex04Component implements OnInit {

  n1 = 0;
  n2 = 0;
  re = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calcular(operacao: string) {
    switch (operacao) {
      case "/":
        this.re = this.n1 / this.n2;
        break;
      case "*":
        this.re = this.n1 * this.n2
        break;
      case "-":
        this.re = this.n1 - this.n2
        break;
      case "+":
        this.re = this.n1 + this.n2
        break;
    }
  }

}
