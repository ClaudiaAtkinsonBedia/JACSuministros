<?php

$ruta = $_SERVER['REQUEST_URI'] ;
$metodo = $_SERVER['REQUEST_METHOD'] ;

if ($metodo == 'GET') {
    
    if (isset($_GET["opcion"])) {
        
        switch ($_GET["opcion"]) {
            case "opcion1":
                echo "Estamos en la opcion 1 del switch" ;
                break;
            
            case "opcion2":
                echo "Estamos en la opcion 2 del switch" ;
                break;
            
            case "opcion3":
                echo "Estamos en la opcion 3 del switch" ;
                break;
            
            default:
                break;
        }
    }
    
}