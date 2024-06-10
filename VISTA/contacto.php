<?php

require_once 'VISTA/Secciones_web/header.php' ;

// Página que muestra el formulario de contacto

/* ENRUTAMIENTO DEL MAIN (FORMULARIO) 
------------------------------------------

La primera vez entra en el formulario. Si el formulario se ha enviado correctamente, mostrará el mensaje de confirmación.
*/

if (isset($_GET['enviado'])) { // Si la variable enviado existe...
    if ($_GET['enviado'] == 'true') // ... y es igual a true...
    {
        require_once 'VISTA/Secciones_web/main_formularioEnviado.php' ; // ... muestra el mensaje de confirmación.
    }
    else if ($_GET['enviado'] == 'false') // ... y es igual a false...
    {
        require_once 'VISTA/Secciones_web/main_formularioErrorEnvio.php' ; // ... muestra el mensaje de error.
    }
}
else // En caso de que no exista la variable enviado...
{
    require_once 'VISTA/Secciones_web/main_formulario.php' ; 
}

require_once 'VISTA/Secciones_web/footer.php' ;