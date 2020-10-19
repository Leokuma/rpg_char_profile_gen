let acc = document.querySelector(".accordion");

export function prepararPainelDoPerfil() {
  acc.addEventListener("click", function(event) {
    event.preventDefault();
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


function moverSanfona(mensagem){
  acc.disabled = false;
  acc.textContent = mensagem;
  acc.click();
  acc.disabled = true;  
}

export function abrirSanfona(){
  if(!acc.classList.contains("active")){
    acc.nextElementSibling.classList.remove("fechaSanfona");
    acc.nextElementSibling.classList.add("abreSanfona");
    moverSanfona('O seu personagem é...');
  }
    
}

export function fecharSanfona(){
  if(acc.classList.contains("active")){
    acc.nextElementSibling.classList.remove("abreSanfona");
    acc.nextElementSibling.classList.add("fechaSanfona");    
    moverSanfona('Complete a ficha e descubra o perfil do seu personagem.');
  }
}

// --------------------------------------------------------------------------------------------------------------

let imagemPerfil = document.querySelector("#perfil");
let descricaoPerfil = document.querySelector("#desc_perfil");

export function mostrarPerfil(caminhoImagem, textoPerfil){      
  imagemPerfil.setAttribute("src", caminhoImagem);
  imagemPerfil.classList.remove("fadeOut");
  imagemPerfil.classList.remove("invisivel");
  imagemPerfil.classList.add("slowFadeIn"); 
  
  descricaoPerfil.textContent = textoPerfil;        
  descricaoPerfil.classList.remove("fadeOut");
  descricaoPerfil.classList.remove("invisivel");
  descricaoPerfil.classList.add("slowFadeIn");    
};

export function esconderPerfil(){       
  imagemPerfil.setAttribute("src", "");
  imagemPerfil.classList.remove("slowFadeIn");
  imagemPerfil.classList.add("invisivel");
  imagemPerfil.classList.add("fadeOut");
      
  descricaoPerfil.textContent = ""; 
  descricaoPerfil.classList.remove("slowFadeIn");       
  descricaoPerfil.classList.add("invisivel");
  descricaoPerfil.classList.add("fadeOut");   
}