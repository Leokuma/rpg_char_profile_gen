<?php

include 'fabricapersonagem.php';

$postData = file_get_contents('php://input');

$info = json_decode($postData, true);

$personagem = fabricaDePersonagem::criar($info);

echo json_encode(get_object_vars($personagem), JSON_UNESCAPED_UNICODE);

?>