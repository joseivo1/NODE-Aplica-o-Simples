import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowClienteComponent } from './cliente/show-cliente/show-cliente.component';
import { ListClientesComponent } from './cliente/list-clientes/list-clientes.component';
import { EditClienteComponent } from './cliente/edit-cliente/edit-cliente.component';
import { NewClienteComponent } from './cliente/new-cliente/new-cliente.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowClienteComponent,
    ListClientesComponent,
    EditClienteComponent,
    NewClienteComponent,
    LoginComponent,
    NavbarComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
