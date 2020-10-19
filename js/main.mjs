import {criarPontuacao} from './score.mjs';
import {prepararComponentesDePontuacao} from './attributePoints.mjs';
import {prepararComponentesDePontosBonus} from './bonusPoints.mjs';
import {prepararEnvioDoFormulario, prepararLimpezaDoFormulario} from './form.mjs';

let pontuacaoAtributos = criarPontuacao(20);

prepararComponentesDePontuacao(pontuacaoAtributos);

prepararComponentesDePontosBonus(pontuacaoAtributos);

prepararEnvioDoFormulario(pontuacaoAtributos);

prepararLimpezaDoFormulario(pontuacaoAtributos);