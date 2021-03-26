import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-ex01',
  templateUrl: './ng-for-ex01.component.html',
  styleUrls: ['./ng-for-ex01.component.css']
})
export class NgForEx01Component implements OnInit {

  imagens = 
  [
    './assets/bird.jpg', 
    './assets/cat.jpg', 
    './assets/dog.jpg'
  ];

  nomes = 
  [
    'Pássaro', 
    'Gato', 
    'Cachorro'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  nomear(i: number) {
    alert(this.nomes[i]);
  }

}
