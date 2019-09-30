class AtributoView extends View {
    constructor(elemento){
        super(elemento);
        this._id = elemento.id;
        this._pontoAdicionalView = new PontoAdicionalView();
    }    

    template(model) {
        return `    
            ${(() => {
                for (let i = 0; i < 5; i++) {
                    `<input type="checkbox" name="${model.id}" ${model.pontuacao > i ? ` checked `:``} />`;
                }
            })()}
            ${_pontoAdicionalView.template(model.id)}
        `;
    }    
}