<?php

require_once 'utilidades/Utilidades.php' ;
require_once 'VISTA/Secciones_web/barraSubcategorias.php' ;


class BarraSubcategoriasControl{
    
    /**
     * Pinta la barra de subcategorías.
     * 
     * @param type $opcion La opción seleccionada por el usuario.
     */
    public static function pintaBarraSubcategorias($opcion) {
        
        $listaSubcategorias = Utilidades::extraerDatosJSON("Subcategorias.json") ; // Extrae los datos del JSON y los guarda en un array
        
        pintarBarraSubcategorias($listaSubcategorias, $opcion) ; // Los pasa a la función que se encarga del pintado
        
    }
    
//    public function listaSubcategorias($nombreArchivo) {
//        
//        $listaSubcategorias = array() ;
//        $listaSubcategorias = Utilidades::extraerDatosJSON($nombreArchivo) ;
//
//        return $listaSubcategorias ;
//    }
    
//    static public function pintarBarraSubcategorias($enlace) {
//        
//        $listaSubcategorias = array() ;
//        $listaSubcategorias = Utilidades::extraerDatosJSON("Subcategorias.json") ;
//        
//        pintarBarraSubcategorias($enlace, $listaSubcategorias) ;
//    }
}