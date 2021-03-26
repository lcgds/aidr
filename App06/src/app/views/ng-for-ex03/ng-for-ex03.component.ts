import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-ex03',
  templateUrl: './ng-for-ex03.component.html',
  styleUrls: ['./ng-for-ex03.component.css']
})
export class NgForEx03Component implements OnInit {

  titles = 
  [
    'Lorem',

    'Adipisci',

    'Nulla'
  ];

  posts = 
  [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',

    'Adipisci dolore debitis, saepe consequatur eaque incidunt deserunt veritatis architecto odio quo voluptates.',

    'Nulla, omnis quod earum itaque aliquam vel, fugiat deserunt modi et dolor, adipisci nisi rerum?'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
