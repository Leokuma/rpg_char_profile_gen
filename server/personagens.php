<?php
//TO-DO: Criar mais perfis de personagem, para atender todas as variedades de distribuição de atributos
class Personagem{
    public $perfil;
    public $imagem;	
}

class Generico extends Personagem { 
	function __construct() {
		$this->perfil = "Genérico demais, mano.";
		$this->imagem = "img/link.png";
	}
}

class Forte extends Personagem { 
	function __construct() {
		$this->perfil = "Um peixão da porra.";
		$this->imagem = "img/hyrule_bass.png";
	}
}

class Festeiro extends Personagem { 
	function __construct() {
		$this->perfil = "Um funkeiro doido.";
		$this->imagem = "img/maracas.png";
	}
}

class Sabio extends Personagem { 
	function __construct() {
		$this->perfil = "Um nerdão mágico.";
		$this->imagem = "img/fairy.png";
	}
}

?>