import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListClientesComponent } from './cliente/list-clientes/list-clientes.component';
import { NewClienteComponent } from './cliente/new-cliente/new-cliente.component';
import { ShowClienteComponent } from './cliente/show-cliente/show-cliente.component';
import { EditClienteComponent } from './cliente/edit-cliente/edit-cliente.component';

const routes: Routes = [
  { path: 'clientes', component: ListClientesComponent },
  { path: 'clientes/novo', component: NewClienteComponent },
  { path: 'clientes/:id', component: ShowClienteComponent },
  { path: 'clientes/:id/editar', component: EditClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
