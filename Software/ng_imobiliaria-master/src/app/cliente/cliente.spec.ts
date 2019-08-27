import { Cliente } from "./cliente";
import { Endereco } from './endereco';

describe('Cliente', () => {
  it('should create an instance', () => {
    expect(new Cliente('Eduardo Pessoa','',true,'cpf','','','',new Endereco('','','',''),'')).toBeTruthy();
  });
  it('should accept values in the constructor', () => {
    let cliente = new Cliente('Eduardo Carreira','',false,'cnpj','','','',new Endereco('','','',''),'');
    expect(cliente.nome).toEqual('Eduardo Carreira');
    expect(cliente.cadastroPessoa).toEqual('cnpj');
    expect(cliente.id).toBeUndefined();
  });
});
