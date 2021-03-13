import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  nome = 'Luiz';
  cor = 'blue';
  urlImagem = '/assets/cat.jpg';
  fontClass = 'sans-serif';

  constructor() { }

  ngOnInit(): void {
  }

  somar(n1: number, n2: number): number {
    return n1 + n2;
  }
}
