import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise4',
  templateUrl: './exercise4.component.html',
  styleUrls: ['./exercise4.component.css']
})
export class Exercise4Component implements OnInit {

  urlDog = '/assets/dog.jpg';
  urlCat = '/assets/cat.jpg';
  urlBird = '/assets/bird.jpg';

  idDog = 'dog';
  idCat = 'cat';
  idBird = 'bird';

  class = 'animal';

  constructor() { }

  ngOnInit(): void {
  }

}
