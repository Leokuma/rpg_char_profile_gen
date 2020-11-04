import {abrirSanfona, fecharSanfona, mostrarPerfil, esconderPerfil} from './accordion.mjs';

function validaForm(pontuacaoAtributos, formulario){
    let temErros = false;

    temErros = !(pontuacaoAtributos.verificarPontosUtilizados());

    let nome = formulario.nome;
    if (nome.value == "") {
        temErros = true;
        nome.classList.add("pontuacaoInvalida"); 
    }

    let sexo = formulario.sexo;
    if (sexo.value == "") {
        temErros = true;
        sexo.classList.add("pontuacaoInvalida");  
    }
    
    let nascimento = formulario.nascimento;
    if (nascimento.value == "") {
        temErros = true;
        nascimento.classList.add("pontuacaoInvalida");   
    }
    
    let comportamento = formulario.comportamento;
    if (comportamento.value == "") {
        temErros = true;
        comportamento.classList.add("pontuacaoInvalida");   
    }
    
    let indole = formulario.indole;
    if (indole.value == "") {
        temErros = true;
        indole.classList.add("pontuacaoInvalida");  
    }
    
    let hobby = formulario.hobby;
    if (hobby.value == "") {
        temErros = true;
        hobby.classList.add("pontuacaoInvalida"); 
    }

    return !temErros;
}

function montaForm(formulario){
    let data = {};
    for (let i = 0; i < formulario.length; ++i) {
        let input = formulario[i];

        if(!isNaN(input.value) && input.value) {
            data[input.name] = parseInt(input.value);                     
        }                            
        else {
            data[input.name] = input.value;
        } 
    }

    document.querySelectorAll('seletor-pontos').forEach(function(seletorDePontos){
        let qntdDePontos = 0;
        
        seletorDePontos.shadowRoot.querySelectorAll('input[type="checkbox"]').forEach(function(ponto){
            if (ponto.checked)
                qntdDePontos++;
        });

        data[seletorDePontos.getAttribute('atributo')] = qntdDePontos;
    });

    return data;
};

function enviaForm(method, action, data){
    fetch(action, {
        headers: {'Content-type' : 'application/json'},
        method: method,
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(personagem => {
        abrirSanfona();
        document.querySelector("audio").play();
        setTimeout(() => mostrarPerfil(personagem["imagem"], personagem["perfil"]), 4750);        
    }); 
}

export function prepararEnvioDoFormulario(formulario, botaoEnviaFormulario, pontuacaoAtributos) {
    for (let i = 0; i < formulario.length; ++i) {
        formulario[i].addEventListener("change",function(){
            this.classList.remove("pontuacaoInvalida");
        });
    }
    
    formulario.onsubmit = function (event){
        event.preventDefault();
    
        if (validaForm(pontuacaoAtributos, this)) {
            let dadosForm = montaForm(this);
            console.log(dadosForm);
            enviaForm(this.method, this.action, dadosForm);
            botaoEnviaFormulario.disabled = true;
        }  
    };
}

function reiniciarComponentesDePontos(){
    document.querySelectorAll('seletor-pontos').forEach(function(seletorDePontos){
        seletorDePontos.pontos = 0;
    });
}

export function prepararLimpezaDoFormulario(formulario, botaoEnviaFormulario, pontuacaoAtributos) {
    let botaoLimpaForm = document.querySelector("#limpaForm");

    botaoLimpaForm.addEventListener("click",function(event){
        event.preventDefault(); 
    
        formulario.reset();
    
        for (let i = 0; i < formulario.length; ++i) {
            formulario[i].classList.remove("pontuacaoInvalida");
        }
    
        reiniciarComponentesDePontos(); 
    
        pontuacaoAtributos.reiniciarPontuacao();
    
        fecharSanfona();
    
        esconderPerfil();    
        
        botaoEnviaFormulario.disabled = false;
    });
}