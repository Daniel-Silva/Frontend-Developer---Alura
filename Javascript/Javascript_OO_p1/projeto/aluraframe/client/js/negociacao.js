class Negociacao {
    constructor(data, quantidade, valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor
    }
    
    get volume(){
        return this._quantidade * this._valor;
    }
    
    get data(){
        return this._data;
    }
    
    get quantidade(){
        return this._quantidade;
    }
    
    get valor(){
        return this._valor
    }
}


var n1 = new Negociacao(new Date(), 5, 700);

Object.defineProperty(n1,'quantidade',{
    configurable: false,
    writable: false
});

Object.defineProperty(n1,'valor',{
    configurable: false,
    writable: false
});

console.log(n1.data)
console.log(n1.quantidade)
console.log(n1.valor)
console.log(n1.volume)