import { Injectable } from "@angular/core";
import { Cliente } from './cliente';
import { AppService } from 'src/app/app.service';
import { CLIENTES } from './mock-clientes';

@Injectable({
    providedIn: 'root'
})
export class ClienteService{
    lastId = 0;

    clientes: Cliente[] = CLIENTES;

    constructor(private appService: AppService){
    }

    //Simular POST em /clientes
    add(cliente: Cliente): Cliente{
        if(!cliente.id){
            cliente.id = ++this.lastId;
        }
        this.clientes.push(cliente);
        return cliente;
    }
    
    //Simular DELETE em /clientes/{id}
    delete(id: number){
        this.clientes = this.clientes.filter(cliente => cliente.id !== id)
    }

    //Simular PUT em /clientes/{id}
    update(novoCliente: Cliente): Cliente{
        const vCliente = this.getById(novoCliente.id);
        if(!vCliente){
            return;
        }
        Object.assign(vCliente, novoCliente);
        return vCliente;
    }

    //Simular GET em /clientes
    list(): Cliente[]{
        return this.clientes;
    }

    //Simular GET em /clientes/{id}
    getById(id: number): Cliente{
        return this.clientes
        .filter(cliente => cliente.id === id)
        .pop();
    }

    changeMessage(message: string) {
        this.appService.changeMessage(message);
      }
    
    clearMessage() {
    this.appService.clearMessage();
    }
    
}