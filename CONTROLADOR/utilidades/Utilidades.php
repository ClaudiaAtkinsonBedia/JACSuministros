<?php

/**
 * Clase que contiene utilidades.
 *
 * @author JAC Suministros
 */
class Utilidades {
    

  /**
   * Metodo para extraer datos de un archivo JSON.
   * 
   * @param type $nombreArchivo El nombre del archivo JSON
   */
  public static function extraerDatosJSON($nombreArchivo) {
        
        $jsondata = file_get_contents( "MODELO/JSON/" . $nombreArchivo); // Navega a la ruta del archivo y extrae su contenido

        return json_decode($jsondata, true) ; // Decodifica el JSON y lo almacena en un array asociativo
    }
    
}