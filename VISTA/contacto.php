<?php

require_once 'VISTA/Secciones_web/header.php' ;

if (isset($_GET['enviado'])) {
    if ($_GET['enviado'] == 'true')
    {
        require_once 'VISTA/Secciones_web/main_formularioEnviado.php' ;
    }
}
else
{
    require_once 'VISTA/Secciones_web/main_formulario.php' ;
}

require_once 'VISTA/Secciones_web/footer.php' ;