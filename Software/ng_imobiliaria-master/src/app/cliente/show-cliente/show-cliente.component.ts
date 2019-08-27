import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'; 
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-show-cliente',
  templateUrl: './show-cliente.component.html',
  styleUrls: ['./show-cliente.component.css']
})
export class ShowClienteComponent implements OnInit {
  public cliente: Cliente;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
    switchMap(
      (params: ParamMap) => this.loadCliente(+params.get('id'))
    ))
    .subscribe(
      (cliente: Cliente) => this.cliente = cliente
    );
  }

  loadCliente(idCliente: number): Promise<Cliente> {
    return new Promise(
      (resolve) => resolve(this.clienteService.getById(idCliente))
    )
  }

  back () {
    this.router.navigate(['/clientes']);
    this.clienteService.clearMessage();
    return false;
  }

  edit() {
    this.clienteService.clearMessage();
    this.router.navigate(['/clientes', this.cliente.id, 'editar']);
    return false;
  }

}
