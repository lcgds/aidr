import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  get(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(environment.apiEndPoint + 'cliente');
  }

  post(cliente?: Cliente): Observable<Cliente> {
    if (!cliente) {
      return EMPTY;
    } else {
      return this.http.post<Cliente>(environment.apiEndPoint + 'cliente', cliente);
    }
  }

  put(cliente?: Cliente): Observable<Cliente> {
    if (!cliente) {
      return EMPTY;
    } else {
      return this.http.put<Cliente>(environment.apiEndPoint + 'cliente/' + cliente.id, cliente);
    }
  }

  delete(id: number): Observable<any> {
    if (id <= 0) {
      return EMPTY;
    } else {
      return this.http.delete<any>(environment.apiEndPoint + 'cliente/' + id);
    }
  }
}
