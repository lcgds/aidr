import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../model/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  get(cep: string): Observable<Endereco> {
    return this.http.get<Endereco>('https://viacep.com.br/ws/' + cep + '/json');
  }

}
