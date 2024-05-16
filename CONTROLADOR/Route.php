<?php

require_once 'CONTROLADOR/BarraSubcategoriasControl.php' ;

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

            case "cookies":
                require_once 'VISTA/politicaCookies.php';
                break;

            case "avisoLegal":
                require_once 'VISTA/avisoLegal.php';
                break;

            case "politicaPrivacidad":
                require_once 'VISTA/politicaPrivacidad.php';
                break;

            case "categoria1":
                require_once 'VISTA/categoria1.php';
                break;
            
            case "subcategoria1":
                require_once 'VISTA/subcategoria1.php';
                break;

            default:
                break;
        }
    } else {
        require_once 'VISTA/home.php';
    }
    
}
