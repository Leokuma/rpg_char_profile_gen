class PlacarPontosDisponiveis{
  constructor(limiteDePontos){
    this._limiteDePontos = limiteDePontos;
    this._pontos = 0;

    this._campoPontuacao = document.querySelector("#pontosDisponiveis");
    this._avisoPontuacao = document.querySelector("#avisoPontuacao");    

    this._atualizarPontosDisponiveis(limiteDePontos, true);
  }

  adicionarPontos(pontosAdicionais) {
    let novaPontuacao = this._pontos + pontosAdicionais;
    if (this._limiteDePontos >= novaPontuacao && novaPontuacao >= 0){
      this._pontos = novaPontuacao;
      this._atualizarPontosDisponiveis(this._limiteDePontos - this._pontos, true);
      return true;
    }  
    else{
      this._mostrarAviso("* Não há pontos suficientes para isto.");
      setTimeout(()=> this._esconderAviso(), 2000);
      return false;
    }    
  }

  verificarPontosUtilizados(){
    if(this._pontos == this._limiteDePontos){
      return true;
    }
    else{
      this._mostrarAviso("* Distribua todos os pontos.");
      return false;
    }
  }  

  reiniciarPontuacao(){
    this._pontos = 0;
    this._atualizarPontosDisponiveis(this._limiteDePontos, true);
  }

  _atualizarPontosDisponiveis(pontosDisponiveis, pontuacaoValida){
    if(pontuacaoValida)
    this._esconderAviso();   

    if(pontosDisponiveis < 10){
      this._campoPontuacao.value = "0"+pontosDisponiveis;
    }else{
      this._campoPontuacao.value = pontosDisponiveis;
    }

  }

  _mostrarAviso(textoAviso){        
    this._avisoPontuacao.textContent = textoAviso;        
    this._avisoPontuacao.classList.remove("fadeOut");
    this._avisoPontuacao.classList.add("fastFadeIn");
    this._campoPontuacao.classList.add("pontuacaoInvalida");    
  };
  
  _esconderAviso(){       
    this._avisoPontuacao.textContent = "";
    this._avisoPontuacao.classList.remove("fastFadeIn");        
    this._avisoPontuacao.classList.add("fadeOut");
    this._campoPontuacao.classList.remove("pontuacaoInvalida"); 
  }
}

export const placarPontosDisponiveis = new PlacarPontosDisponiveis(20);