function atualizarSanfona(mensagem){
  let acc = document.querySelector(".accordion");
  acc.disabled = false;
  acc.textContent = mensagem;
  
  acc.classList.toggle("active");
  let panel = acc.nextElementSibling;
  if (panel.style.maxHeight){
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }

  acc.disabled = true;  
}

export function abrirSanfona(){
  let acc = document.querySelector(".accordion");
  if(!acc.classList.contains("active")){
    acc.nextElementSibling.classList.remove("fechaSanfona");
    acc.nextElementSibling.classList.add("abreSanfona");
    atualizarSanfona('O seu personagem é...');
  }
    
}

export function fecharSanfona(){
  let acc = document.querySelector(".accordion");
  if(acc.classList.contains("active")){
    acc.nextElementSibling.classList.remove("abreSanfona");
    acc.nextElementSibling.classList.add("fechaSanfona");    
    atualizarSanfona('Complete a ficha e descubra o perfil do seu personagem.');
  }
}

// --------------------------------------------------------------------------------------------------------------

export function mostrarPerfil(caminhoImagem, textoPerfil){
  let imagemPerfil = document.querySelector("#perfil");
  let descricaoPerfil = document.querySelector("#desc_perfil");  
  
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
  let imagemPerfil = document.querySelector("#perfil");
  let descricaoPerfil = document.querySelector("#desc_perfil");  
  
  imagemPerfil.setAttribute("src", "");
  imagemPerfil.classList.remove("slowFadeIn");
  imagemPerfil.classList.add("invisivel");
  imagemPerfil.classList.add("fadeOut");
      
  descricaoPerfil.textContent = ""; 
  descricaoPerfil.classList.remove("slowFadeIn");       
  descricaoPerfil.classList.add("invisivel");
  descricaoPerfil.classList.add("fadeOut");   
}