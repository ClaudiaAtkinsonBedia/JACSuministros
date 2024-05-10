<?php

$ruta = $_SERVER['REQUEST_URI'] ;
$metodo = $_SERVER['REQUEST_METHOD'] ;

$respuesta ;

if ($metodo == 'GET') {
    
    if (isset($_GET["opcion"])) {
        
        switch ($_GET["opcion"]) {
            case "opcion1":
                $respuesta = BarraSubcategoriasControl::pintaBarraSubcategorias("opcion1") ;
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

echo json_encode($respuesta) ;