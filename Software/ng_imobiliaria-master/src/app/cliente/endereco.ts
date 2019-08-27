export class Endereco {
    constructor (
        private _rua: string,
        private _bairro: string,
        private _numero: string,
        private _cep: string,
    ){}

    
    public get rua() : string {
        return this._rua
    }
    public get bairro() : string {
        return this._bairro
    }
    public get numero() : string {
        return this._numero
    }
    public get cep() : string {
        return this._cep
    }
    
    //Setters
    public set rua(v : string) {
        this._rua = v;
    }
    public set bairro(v : string) {
        this._bairro = v;
    }
    public set numero(v : string) {
        this._numero = v;
    }
    public set cep(v : string) {
        this._cep = v;
    }
    
}