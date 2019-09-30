class PontoAdicionalView extends View {
    template(id) {
        return `    
            <div class="info-adicional invisivel fadeOut">
                <button class="botao remover-atributo">-</button>
                <input type="text" name="${id}adicional" placeholder="+0" class="campo-redondo adicional" readonly/>
                <button class="botao adicionar-atributo">+</button>
            </div>
        `;
    }    
}