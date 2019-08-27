import {Cliente} from "./cliente";
import { Endereco } from './endereco';
/*
'Gustavo Maciel', "1234567", true,
      "1234567890", "83999999999", 
      "gustavo.maciel@dcx.ufpb.com", "Estudante", 
      new Endereco(
          "rua", "centro", "1234", "12345678"
      ), "Executivo"
*/
export const CLIENTES: Cliente[] = [
    {id: 1, nome:'Gustavo Maciel', rg:'1234567',
    tipoCadastroPessoa:true, cadastroPessoa:'123456890', telefone: '83999999999', 
    email:'gustavo.maciel@dce.ufpb.br', profissao: 'Estudante', 
    endereco: new Endereco('rua','bairro','numero','cep'), tipoCliente:'Locador'}
]