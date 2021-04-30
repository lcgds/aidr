import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question10',
  templateUrl: './question10.component.html',
  styleUrls: ['./question10.component.css']
})
export class Question10Component implements OnInit {
  paises = ['Bélgica', 'Finlândia', 'Hungria', 'Itália', 'Portugal'];

  capitais = ['Bruxelas', 'Helsínquia', 'Budapeste', 'Roma', 'Lisboa'];

  constructor() { }

  ngOnInit(): void {
  }

}
