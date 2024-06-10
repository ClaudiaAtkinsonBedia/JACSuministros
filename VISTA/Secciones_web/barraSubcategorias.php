
<?php

// Esta barra utiliza JavaScript para desplegarse y coge los datos de un JSON

require_once 'CONTROLADOR/BarraSubcategoriasControl.php' ;

/**
 * Pinta la barra de subcategorías. Recibe una lista y la opción deseada para crear una lista en HTML
 * 
 * @param array $listaSubcategorias Array con la listade subcategorías
 * @param int $opcionSeleccionada La opción seleccionada por el usuario
 */
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

