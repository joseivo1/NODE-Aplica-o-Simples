import { TestBed, inject } from '@angular/core/testing';
import { AppService } from 'src/app/app.service';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente';
import { Endereco } from './endereco';

describe('BookService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService, ClienteService]
    });
  });

  it('should exist', inject([ClienteService], (service: ClienteService) => {
    expect(service).toBeTruthy();
  }));

  describe('#list()', () => {

    it('should return an empty array by default', inject([ClienteService], (service: ClienteService) => {
      expect(service.list()).toEqual([]);
    }));

    it('should return all books', inject([ClienteService], (service: ClienteService) => {
      const cliente1 = new Cliente('Eduardo Pessoa','',true,'cpf','','','',new Endereco('','','',''),'');
      const cliente2 = new Cliente('Eduardo Carreira','',false,'cnpj','','','',new Endereco('','','',''),'');
      service.add(cliente1);
      service.add(cliente2);
      expect(service.list()).toEqual([cliente1, cliente2]);
    }));
  });

  describe('#save(book)', () => {

    it('should automatically assign an incrementing id', inject([ClienteService], (service: ClienteService) => {
        const cliente1 = new Cliente('Eduardo Pessoa','',true,'cpf','','','',new Endereco('','','',''),'');
        const cliente2 = new Cliente('Eduardo Carreira','',false,'cnpj','','','',new Endereco('','','',''),'');
        service.add(cliente1);
        service.add(cliente2);
        expect(service.getById(1)).toEqual(cliente1);
        expect(service.getById(2)).toEqual(cliente2);
    }));
  });


  describe('#delete(id)', () => {

    it('should remove book with the corresponding id', inject([ClienteService], (service: ClienteService) => {
        const cliente1 = new Cliente('Eduardo Pessoa','',true,'cpf','','','',new Endereco('','','',''),'');
        const cliente2 = new Cliente('Eduardo Carreira','',false,'cnpj','','','',new Endereco('','','',''),'');
        service.add(cliente1);
        service.add(cliente2);
        expect(service.list()).toEqual([cliente1, cliente2]);
        service.delete(1);
        expect(service.list()).toEqual([cliente2]);
        service.delete(2);
        expect(service.list()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([ClienteService], (service: ClienteService) => {
        const cliente1 = new Cliente('Eduardo Pessoa','',true,'cpf','','','',new Endereco('','','',''),'');
        const cliente2 = new Cliente('Eduardo Carreira','',false,'cnpj','','','',new Endereco('','','',''),'');
        service.add(cliente1);
        service.add(cliente2);
        expect(service.list()).toEqual([cliente1, cliente2]);
        service.delete(3);
        expect(service.list()).toEqual([cliente1, cliente2]);
    }));
  });

  describe('#update(book)', () => {

    it('should return book with the corresponding id and updated data', inject([ClienteService], (service: ClienteService) => {
        const cliente1 = new Cliente('Eduardo Pessoa','',true,'cpf','','','',new Endereco('','','',''),'');
        service.add(cliente1);
        const cliente2 = new Cliente('Eduardo Carreira','',false,'cnpj','','','',new Endereco('','','',''),'');
        cliente2.id = cliente1.id;
        const updated = service.update(cliente2);
        expect(updated.nome).toEqual('Eduardo Carreira');
        expect(updated.cadastroPessoa).toEqual('cnpj');
    }));

    it('should return null if todo is not found', inject([ClienteService], (service: ClienteService) => {
        const cliente1 = new Cliente('Eduardo Pessoa','',true,'cpf','','','',new Endereco('','','',''),'');
        service.add(cliente1);
        const cliente2 = new Cliente('Eduardo Carreira','',false,'cnpj','','','',new Endereco('','','',''),'');
        cliente2.id = 3;
        const updated = service.update(cliente2);
        expect(updated).toBeUndefined();
    }));
  });

});
