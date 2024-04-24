<?php

$ruta = $_SERVER['REQUEST_URI'];
$metodo = $_SERVER['REQUEST_METHOD'];

//echo $ruta ; //http://localhost/JAC_Suministros/index.php
//if (strpos($ruta, '/Primera-Fila') === 0) {
//    echo "La ruta actual es: " . $ruta ;

if ($metodo == 'GET') {
    if (isset($_GET["pagina"])) {
        
        switch ($_GET["pagina"]) {
            case "home":
                require_once 'VISTA/home.php';
                break;
            
             case "contacto":
                require_once 'VISTA/contacto.php';
                break;

            case "blog":
                require_once 'VISTA/blog.php';
                break;
            
            default:
                break;
        }
    } else {
        require_once 'VISTA/home.php';
    }
}
