import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes = new Array<Cliente>();
  cliente?: Cliente;
  editMode = false;
  createMode = false;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.read();
  }

  create(): void {
    this.cliente = new Cliente();
    this.editMode = true;
    this.createMode = true;
  }

  cancelEdit(): void {
    this.cliente = undefined;
    this.editMode = false;
  }

  save(): void {
    if (this.createMode === true) {
      this.clienteService.post(this.cliente).subscribe(clientes => {
        this.read();
        this.cancelEdit();
      });
    } else {
      this.clienteService.put(this.cliente).subscribe(clientes => {
        this.read();
        this.cancelEdit();
      });
    }
  }

  read(): void {
    this.clienteService.get().subscribe(objClientes => {
      this.clientes = objClientes;
    });
  }

  update(cliente: Cliente): void {
    this.cliente = cliente;
    this.editMode = true;
    this.createMode = false;
  }

  destroy(id?: number): void {
    if (id) {
      this.clienteService.delete(id).subscribe(() => {
        this.read();
      });
    } else {
      return;
    }
  }
}
