import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css']
})
export class Exercise3Component implements OnInit {

  classeCSS = 'petroleo';

  constructor() { }

  ngOnInit(): void {
  }

  transformarEmMaiuscula(texto: string): string {
    return texto.toUpperCase();
  }

}
