<?php

include 'personagens.php';

class fabricaDePersonagem{

    public static function criar($info){
		//TO-DO: Utilizar todas as informações relevantes do formulário para a fabricação do personagem
		//TO-DO: Criar uma regra mais dinâmica para selecionar personagens com base nos atributos
		$bomFisico = (intval($info['forca']) >= 5 or intval($info['destreza']) >= 5 or intval($info['vigor']) >= 5);
		$bomSocial = (intval($info['carisma']) >= 5 or intval($info['manipulacao']) >= 5 or intval($info['aparencia']) >= 5);
		$bomMental = (intval($info['percepcao']) >= 5 or intval($info['inteligencia']) >= 5 or intval($info['raciocinio']) >= 5);

		if ($bomFisico) {
			return new Forte();
		} elseif ($bomSocial) {
			return new Festeiro();
		} elseif ($bomMental) {
			return new Sabio();
		} else {
			return new Generico();
		}
    }
}

?>