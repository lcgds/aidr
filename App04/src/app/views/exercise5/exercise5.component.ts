import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise5',
  templateUrl: './exercise5.component.html',
  styleUrls: ['./exercise5.component.css']
})
export class Exercise5Component implements OnInit {

  foto = 'bird';
  url = '/assets/bird.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    switch (this.foto) {
      case 'bird':
        this.foto = 'cat';
        this.url = '/assets/cat.jpg';
        break;
      case 'cat':
        this.foto = 'dog';
        this.url = '/assets/dog.jpg';
        break;
      case 'dog':
        this.foto = 'bird';
        this.url = '/assets/bird.jpg';
        break;
    }
  }

}
