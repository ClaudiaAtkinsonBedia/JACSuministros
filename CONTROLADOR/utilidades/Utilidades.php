<?php

/**
 * Description of Utilidades
 *
 * @author JAC Suministros
 */
class Utilidades {
    
  public static function extraerDatosJSON($nombreArchivo) {
        
        $jsondata = file_get_contents( "MODELO/JSON/" . $nombreArchivo);

        return json_decode($jsondata, true) ;
    }
    
}