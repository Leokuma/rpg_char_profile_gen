let listaCheckbox = document.querySelectorAll("input[type='checkbox']");

//TO-DO: Refatorar rotina de validação de pontos para cada checkbox
listaCheckbox.forEach(function(checkbox){   
    checkbox.addEventListener("click", function(){
        let listaAtual = this.parentNode;
        let listaCheckboxAtual = listaAtual.querySelectorAll("input[type='checkbox']");

        let verificouCheckboxAtual = false;
        let temMaisPontosAtivos = false;
        let habilitarPontosAdicionais = false;
        let novaPontuacao = 0;
        
        //Verifica a nova pontuação que será atribuída
        for (let i = listaCheckboxAtual.length - 1; i >= 0; i--)
        {
            if (verificouCheckboxAtual)
            {
                if (!listaCheckboxAtual[i].checked)
                    novaPontuacao++;                   
            }
            else if (listaCheckboxAtual[i] == this)
            {
                if (listaCheckboxAtual[i].checked)
                    novaPontuacao++;
                else if (!temMaisPontosAtivos)
                    novaPontuacao--;                    
                verificouCheckboxAtual = true;               
            }            
            else
            {
                if (listaCheckboxAtual[i].checked)
                    novaPontuacao--;                   
                temMaisPontosAtivos = listaCheckboxAtual[i].checked;                                     
            }
        }

        //Se a nova pontuação for válida, preenche os pontos na página
        if (pontuacaoAtributos.adicionarPontos(novaPontuacao)){
            verificouCheckboxAtual = false;
            temMaisPontosAtivos = false;            
            for (let i = listaCheckboxAtual.length - 1; i >= 0; i--)
            {
                if (verificouCheckboxAtual)
                {
                    listaCheckboxAtual[i].checked = true;            
                }
                else if (listaCheckboxAtual[i] == this)
                {
                    if (temMaisPontosAtivos)
                    {
                        listaCheckboxAtual[i].checked = true;
                    }
                    else if (listaCheckboxAtual[i].checked)
                    {
                        habilitarPontosAdicionais = (i == listaCheckboxAtual.length - 1);                
                    }
                    verificouCheckboxAtual = true;               
                }            
                else
                {                   
                    temMaisPontosAtivos = listaCheckboxAtual[i].checked;
                    listaCheckboxAtual[i].checked = false;                                      
                }            
            }

            verificarPontosAdicionais(listaAtual.id, habilitarPontosAdicionais);          
        }
        else{
            this.checked = !this.checked;
        }                              
        
        console.log(pontuacaoAtributos.getPontos());
    });    
});