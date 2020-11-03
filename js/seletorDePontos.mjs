let pontuacaoAtributos;

class SeletorDePontos extends HTMLElement{
    constructor() {
        super();

        this.attachShadow({mode: 'open'}); 
    }

    _definirAtualizacaoPontos(checkbox){
        checkbox.addEventListener('click', function(){
            let pontuacaoIncremento;
            let listaCheckboxAtualSelecionados = checkbox.parentNode.querySelectorAll("input[type='checkbox']:checked");
            let pontuacaoAtual = listaCheckboxAtualSelecionados.length + (checkbox.checked ? - 1 : 1);
    
            //Verifica a nova pontuação que será atribuída
            if (!checkbox.checked && checkbox.value == pontuacaoAtual)
                pontuacaoIncremento = - 1;
            else
                pontuacaoIncremento = checkbox.value - pontuacaoAtual;
    
            let pontuacaoNova = pontuacaoAtual + pontuacaoIncremento;
            
            //Se a nova pontuação for válida, preenche os pontos na página
            if (pontuacaoAtributos.adicionarPontos(pontuacaoIncremento)){
                let listaCheckboxAtual = checkbox.parentNode.querySelectorAll("input[type='checkbox']");
                listaCheckboxAtual.forEach(checkbox => checkbox.checked = (checkbox.value <= pontuacaoNova));

                let pontoAdicional = checkbox.parentNode.querySelector(".info-adicional");
                let campoPontoAdicional = pontoAdicional.querySelector(".adicional");
            
                if (pontuacaoNova == listaCheckboxAtual.length) {
                    pontoAdicional.classList.remove("invisivel", "fadeOut");
                    pontoAdicional.classList.add("fastFadeIn");
                }
                else {
                    pontoAdicional.classList.add("fadeOut", "invisivel");
                    pontoAdicional.classList.remove("fastFadeIn");
                    if (campoPontoAdicional.value != "")
                        pontuacaoAtributos.adicionarPontos(parseInt(campoPontoAdicional.value) * -1);
                }
                
                campoPontoAdicional.value = "";                
            }
            else{
                checkbox.checked = !checkbox.checked;
            }
        });        
    }

    _definirAtualizacaoPontosExtras(pontoAdicional){
        let campoAdicional = pontoAdicional.querySelector(".adicional"); 
    
        let botaoAdicionarAtributo = pontoAdicional.querySelector(".adicionar-atributo");
    
        botaoAdicionarAtributo.addEventListener("click", function(event){
            event.preventDefault();       
        
            if (campoAdicional.value == "") {
                if (pontuacaoAtributos.adicionarPontos(+1))
                    campoAdicional.value = "+1";                
            }
            else if (campoAdicional.value >= 1 && campoAdicional.value <= 4) {
                if (pontuacaoAtributos.adicionarPontos(+1)){
                    campoAdicional.value = parseInt(campoAdicional.value)+1;
                    campoAdicional.value = "+" + campoAdicional.value;
                }                           
            }
        });
        
        let botaoRemoverAtributo = pontoAdicional.querySelector(".remover-atributo");
        
        botaoRemoverAtributo.addEventListener("click", function(event){
            event.preventDefault();       
        
            if (campoAdicional.value == 1) {
                if (pontuacaoAtributos.adicionarPontos(-1))
                    campoAdicional.value = "";                
            }
            else if (campoAdicional.value > 1 && campoAdicional.value <= 5) {
                if (pontuacaoAtributos.adicionarPontos(-1)){
                    campoAdicional.value = parseInt(campoAdicional.value)-1;
                    campoAdicional.value = "+" + campoAdicional.value; 
                }                      
            }
        });  
    }

    _definirFuncionalidadeComponentes(){
        this.shadowRoot.querySelectorAll("input[type='checkbox']").forEach(this._definirAtualizacaoPontos);

        this.shadowRoot.querySelectorAll(".info-adicional").forEach(this._definirAtualizacaoPontosExtras);
    }

    _gerarListaDeCheckbox(nomeDoAtributo, quantidade, selecionados){
        let listaDeCheckBox = '';
        for (let contador = 1; contador <= quantidade; contador++) {
            listaDeCheckBox += `
                <input type="checkbox" name="${nomeDoAtributo}" value="${contador}" ${selecionados >= contador ? 'checked':''} />
            `;
        }
        return listaDeCheckBox;
    }

    _renderizar(){
        this.shadowRoot.innerHTML = '';

        const atributo = this.getAttribute('atributo');
        const titulo = this.getAttribute('titulo');
        const pontos = this.getAttribute('pontos');
        const maxPontos = this.getAttribute('max-pontos');

        const divInfoCategoria = document.createElement('div');

        divInfoCategoria.setAttribute('id', atributo);
        divInfoCategoria.setAttribute('class', 'info-categoria');

        divInfoCategoria.innerHTML = `
            <label for="${atributo}">${titulo}</label>
            ${this._gerarListaDeCheckbox(atributo, maxPontos, pontos)}
            <div class="info-adicional invisivel fadeOut">
                <button class="botao remover-atributo">-</button>
                <input type="text" name="${atributo + "adicional"}" placeholder="+0" class="campo-redondo adicional" readonly/>
                <button class="botao adicionar-atributo">+</button>
            </div>        
        `;

        const estilo = document.createElement('style');

        estilo.textContent = `@import "css/index.css";`;

        this.shadowRoot.append(estilo, divInfoCategoria);

        this._definirFuncionalidadeComponentes();
    }

    connectedCallback() {
        this._renderizar();
    }

    attributeChangedCallback(nome, antigoValor, novoValor) {
        console.log(nome, antigoValor, novoValor);

        // switch(nome){
        //     case 'atributo':   
        //         this._atributo  = novoValor;           
        //     case 'titulo':     
        //         this._titulo    = novoValor;
        //     case 'pontos':     
        //         this._pontos    = novoValor;
        //     case 'max-pontos': 
        //         this._maxPontos = novoValor;
        // }

        //this._renderizar();
    }

    static get observedAttributes() { return ['atributo', 'titulo', 'pontos', 'max-pontos']; }
}

export function criarComponenteSeletorDePontos(pontuacaoAtributosExterno){
    pontuacaoAtributos = pontuacaoAtributosExterno;
    customElements.define('seletor-pontos', SeletorDePontos);
}