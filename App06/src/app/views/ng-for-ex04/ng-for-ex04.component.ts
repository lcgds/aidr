import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-ex04',
  templateUrl: './ng-for-ex04.component.html',
  styleUrls: ['./ng-for-ex04.component.css']
})
export class NgForEx04Component implements OnInit {
  
  name = '';
  names = [''];
  start = false;

  constructor() { }

  ngOnInit(): void {
    this.names.forEach(element => {
      if(element === '') {
        this.names.pop();
      }
    });
  }

  adicionarNome(): void {
    if(this.name !== '') {
      this.names.push(this.name);
    }

    
    this.start = true;
  }

}
