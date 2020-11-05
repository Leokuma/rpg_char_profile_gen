import {prepararEnvioDoFormulario, prepararLimpezaDoFormulario} from './formulario.mjs';
import {criarComponenteSeletorDePontos} from './seletor-pontos.mjs';

criarComponenteSeletorDePontos();

let formulario = document.querySelector("#form-adiciona");

let botaoEnviaFormulario = document.querySelector("input[type='submit']");

prepararEnvioDoFormulario(formulario, botaoEnviaFormulario);

prepararLimpezaDoFormulario(formulario, botaoEnviaFormulario);