<?php

require_once 'utilidades/Utilidades.php' ;
require_once 'VISTA/Secciones_web/barraSubcategorias.php' ;


class BarraSubcategoriasControl{
    
    public static function pintaBarraSubcategorias($opcion) {
        
        $listaSubcategorias = Utilidades::extraerDatosJSON("Subcategorias.json") ;
        
        pintarBarraSubcategorias($listaSubcategorias, $opcion) ;
        
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