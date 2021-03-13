import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise6',
  templateUrl: './exercise6.component.html',
  styleUrls: ['./exercise6.component.css']
})
export class Exercise6Component implements OnInit {

  texto = "Campo para texto.";

  constructor() { }

  ngOnInit(): void {
  }

  trocarTexto(Lorem: number): void {
    switch (Lorem) {
      case 1:
        this.texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
        break;
      case 2:
        this.texto = "Iste dolore iure eius illum aperiam labore, molestiae, omnis facere soluta vitae, sit magni alias.";
        break;
      case 3:
        this.texto = "Beatae vero libero, id dignissimos officiis tenetur.";
        break;
    }
  }

}
