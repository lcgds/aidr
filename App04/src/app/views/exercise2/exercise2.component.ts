import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  transformarEmMaiuscula(texto: string): string {
    return texto.toUpperCase();
  }
}
