
<?php

require_once 'CONTROLADOR/BarraSubcategoriasControl.php' ;

 function pintarBarraSubcategorias($listaSubcategorias, $opcionSeleccionada) {

    $render = "" ;
    $subcategorias = $listaSubcategorias[$opcionSeleccionada] ;
     
    foreach ($subcategorias as $subcategoria ) {
            
            $render .= '<li class = "nav-item">' ;
            $render .= '<a class = "nav-link" href = "#"> ' . $subcategoria . ' </a>' ;
            $render .= '</li>' ;
        
    }
  
    echo $render ;
}