import { Endereco } from './endereco';

export class Cliente {
    public id: number;

    constructor(
        public nome: string,
        public rg: string,
        public tipoCadastroPessoa: boolean,
        public cadastroPessoa: string,
        public telefone: string,
        public email: string,
        public profissao: string,
        public endereco: Endereco,
        public tipoCliente: string,
    ){}

}

/*
nome completo, RG + órgão
exp., CPF ou CNPJ, telefone, email,
profissão, endereço, tipo de cliente
(locador* ou locatário**).
*/