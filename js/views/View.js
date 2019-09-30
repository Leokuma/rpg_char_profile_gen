class View {
    constructor(elemento){
        this._elemento = elemento;
    }

    template(){
        throw new Error('O método template deve ser implementado');
    }
    
    addEvents(){
        throw new Error('O método addEvents deve ser implementado');
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }  
}