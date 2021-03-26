import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  estados = ['MG', 'RS', 'PR', 'CE'];

  jogos = 
  [
    'God of War',
    'GTA V',
    'The Witcher 3',
    'Watch Dogs'
  ];

  notas = [
    '95',
    '90',
    '100',
    '85'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
