
<?php 

  $quantos = $_POST["quantos"];
  $maximo = $_POST["maximo"];
  
 function sorteio($quantos, $maximo){
    $resultado = new stdClass();
    $resultado->valor = rand(0, $maximo);
    $resultado->quantos = $quantos;
    $resultado->maximo = $maximo;
    $i = 1;

    while ($i <= $quantos - 1){
        $resultado->valor = $resultado->valor . ", " . rand(0, $maximo);
        $i++;
    }

    $resp = json_encode($resultado);
    echo $resp;
}

    sorteio($quantos, $maximo); 

?>