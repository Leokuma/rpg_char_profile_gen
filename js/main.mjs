import {criarPontuacao} from './score.mjs';
import {prepararEnvioDoFormulario, prepararLimpezaDoFormulario} from './form.mjs';
import {criarComponenteSeletorDePontos} from './seletorDePontos.mjs';

let pontuacaoAtributos = criarPontuacao(20);

criarComponenteSeletorDePontos(pontuacaoAtributos);

let formulario = document.querySelector("#form-adiciona");

let botaoEnviaFormulario = document.querySelector("input[type='submit']");

prepararEnvioDoFormulario(formulario, botaoEnviaFormulario, pontuacaoAtributos);

prepararLimpezaDoFormulario(formulario, botaoEnviaFormulario, pontuacaoAtributos);