import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.css']
})
export class Exercicio4Component implements OnInit {
  v1 = 0;
  v2 = 0;
  operacao = '';
  resultado = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calcula(): void {
    switch (this.operacao) {
      case "/":
        this.resultado = Number(this.v1) / Number(this.v2);
        break;
      case "*":
        this.resultado = Number(this.v1) * Number(this.v2);
        break;
      case "-":
        this.resultado = Number(this.v1) - Number(this.v2);
        break;
      default:
      case "+":
        this.resultado = Number(this.v1) + Number(this.v2);
        break;
    }
  }

}
