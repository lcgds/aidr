import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nome='';
  cidade = '';
  prefEmail = false;
  prefTel = false;
  genero = '';

  constructor() { }

  ngOnInit(): void {
  }

  limpar(): void {
    this.nome = "";
  }
}
