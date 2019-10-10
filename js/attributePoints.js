let listaCheckbox = document.querySelectorAll("input[type='checkbox']");

//TO-DO: Refatorar rotina de validação de pontos para cada checkbox
listaCheckbox.forEach(function(checkbox){   
    checkbox.addEventListener("click", function(){
        let novaPontuacao;
        
        //Verifica a nova pontuação que será atribuída
        if (!this.checked && this.value == pontuacaoAtributos.getPontos())
            novaPontuacao = - 1;
        else
            novaPontuacao = this.value - pontuacaoAtributos.getPontos();

        //Se a nova pontuação for válida, preenche os pontos na página
        if (pontuacaoAtributos.adicionarPontos(novaPontuacao)){
            let listaCheckboxAtual = this.parentNode.querySelectorAll("input[type='checkbox']");
            
            listaCheckboxAtual.forEach(checkbox => {
                checkbox.checked = (checkbox.value <= pontuacaoAtributos.getPontos());
            });

            verificarPontosAdicionais(this.parentNode.id, (pontuacaoAtributos.getPontos() == listaCheckboxAtual.length));
        }
        else{
            this.checked = !this.checked;
        }
    });
});