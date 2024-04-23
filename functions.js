window.onload = inicio; // Cargamos toda la página lo primero

function inicio() {


    // ---------------- DECLARACIONES DE ELEMENTOS DEL DOM -----------------

    // BOTÓN E INPUTS

    let boton = document.getElementById("botonSubmit"); // Botón
    let nombre = document.getElementById("name"); // Nombre
    let direccion = document.getElementById("direccion"); // Dirección
    let email = document.getElementById("email"); // Email
    let telefono = document.getElementById("telefono"); // Teléfono
    let mensaje = document.getElementById("mensaje");  // Mensaje

    // MENSAJES DE ERRORES

    let errorNombre = document.getElementById("nameErrores"); // Nombre
    let errorDireccion = document.getElementById("direccionErrores"); // Dirección
    let errorCorreo = document.getElementById("emailErrores"); // Email
    let errorTelefono = document.getElementById("telefonoErrores"); // Teléfono
    let errorMensaje = document.getElementById("mensajeErrores"); // Mensaje

    // ------------------ LISTENERS ----------------------

    nombre.addEventListener("input", function () {
        cambiaColorInput(errorNombre, validarNombre());
    }, false);

    email.addEventListener("input", function () {
        cambiaColorInput(errorCorreo, validarEmail());
    }, false);

    telefono.addEventListener("input", function () {
        cambiaColorInput(errorTelefono, validarTelefono());
    }, false);

    mensaje.addEventListener("input", function () {
        cambiaColorInput(errorMensaje, validarMensaje());
    }, false);
    
    // ------------------- FUNCIONES -----------------------------

    
    // FUNCIONES AUXILIARES

        function cambiaColorInput(elemento, esValido) {

        if (elemento.value == "") {
            elemento.style.color = "gray";
        }
        else if (esValido) {
            elemento.style.color = "green";
        }
        else {
            elemento.style.color = "red";
        }
    }


    // FUNCIONES DE VALIDACIÓN


    /**
     * Función que valida el nombre.
     * Requisitos:
     *  - Longitud máxima 50 caracteres.
     *  - No se permite una única palabra.
     *  - No se permiten dos espacios seguidos.
     *  - No se puede comenzar ni terminar con guiones.
     *  - Los guiones no pueden estar envueltos por espacios.
     * 
     * @returns {boolean} Devuelve true si el nombre es correcto, false en caso contrario.
     */
    function validarNombre() {
        
        let valido = false;
        // Expresión regular modificada para validar varias palabras sin guiones y con tildes permitidas
        let regNombre = /^[A-ZÁÉÍÓÚÄËÏÖÜÑæaø'-záéíóúäëïöüñ?]+(?:[- ][A-ZÁÉÍÓÚÄËÏÖÜÑæaø'-záéíóúäëïöüñ]+)+$/ ;
        
        let dobleEspacio = /  /g ; // No se permiten dos espacios seguidos
        let limiteCaracteres = /^.{1,50}$/;
    
        if (nombre.value.trim() === "") {
            errorNombre.innerHTML = "El nombre es requerido" ;
            nombre.focus();
            valido = false;
        }
        else if (!limiteCaracteres.test(nombre.value)) {
            errorNombre.innerHTML = "El máximo son 50 caracteres";
            nombre.focus();
            valido = false;
        }
       else if(dobleEspacio.test(nombre.value))
            // Si se introducen dos espacios seguidos
        {
            errorNombre.innerHTML = "No se permiten dos espacios seguidos" ;
            nombre.focus() ;

            valido = false ;
            
        } 
        else if (!regNombre.test(nombre.value)) {
            errorNombre.innerHTML = "El nombre no es válido. Asegúrese de que esté bien formado y no incluya guiones.";
            nombre.focus();
            valido = false;
        }
         else {
            errorNombre.innerHTML = "";
            valido = true;
        }
    
        return valido;
    }

    /**
     * Función que sirve para validar el correo electrónico del formulario.
     * Requisitos:
     *  - Debe de ser un correo electrónico válido. Ejemplo: correo@correo.com
     *  - No puede estar vacío.
     * 
     * @returns {boolean} Devuelve true si el correo electrónico es correcto, false en caso contrario.
     */
    function validarEmail() { 
        
        let regexC = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ; // La expresión regular del correo electrónico
        if (email.value === "") // Si el campo del correo electrónico está vacío
        {
            errorCorreo.innerHTML = "Debe introducir un email válido."; // Les indicamos en el div errorCorreo que escriban su correo
            return false;
        }
        else if (!regexC.test(email.value)) // Si el correo electrónico que escriben no coincide con la expresión regular
        {
            errorCorreo.innerHTML = "El correo electrónico no cumple con los requisitos."; // Les indicamos en el div errorCorreo que escriban un correo que cumpla con los requisitos
            return false;
        }
        else // En caso contrario, de que todo esté correcto y hayan escrito todo correcto
        {
            errorCorreo.innerHTML = ""; // No saltará ningun error o se borrará el error
            return true;
        }
    }

    /**
    * Función que sirve para validar el teléfono del formulario.
    * Requisitos:
    *  - Debe ser un número de 9 dígitos.
    *  - No puede estar vacío.
    * 
    * @returns {boolean} Devuelve true si el teléfono es correcto, false en caso contrario.
    */
    function validarTelefono()
    {

        let regexT = /^\d{9}$/;    
        if (telefono.value === "") // Si el campo del teléfono está vacío
        {
            errorTelefono.innerHTML = "Debe introducir un teléfono válido."; // Les indicamos en el div errorTelefono que escriban su teléfono
            return false;
        }
        else if (!regexT.test(telefono.value)) // Si el teléfono que escriben no coincide con la expresión regular
        {
            errorTelefono.innerHTML = "El teléfono no cumple con los requisitos."; // Les indicamos en el div errorTelefono que escriban un teléfono que cumpla con los requisitos
            return false;
        }
        else // En caso contrario, de que todo esté correcto y hayan escrito todo correcto
        {
            errorTelefono.innerHTML = ""; // No saltará ningun error o se borrará el error
            return true;
        }
    }

    function validarMensaje()
    {
        let valido = false ;
        let limiteMinimoCaracteres = /^.{4,}$/ ; // Mínimo 20 caracteres y máximo 500.
        let limiteMaximoCaracteres = /^.{0,20}$/;

        if (mensaje.value.trim() === "") // Si está vacío
        {
            errorMensaje.innerHTML = "El mensaje es requerido" ;
            mensaje.focus();
            valido = false;
        }
        else // Si no está vacío
        {
            if (!limiteMinimoCaracteres.test(mensaje.value)) // Si se escriben caracteres por debajo del mínimo
            {
                errorMensaje.innerHTML = "El mensaje debe tener más de 4 caracteres" ;
                mensaje.focus() ;
                valido = false ;
            }
            else if(!limiteMaximoCaracteres.test(mensaje.value)) // Si se escriben caracteres por encima del máximo
            { 
                errorMensaje.innerHTML = "El mensaje debe tener menos de 20 caracteres" ;
                mensaje.focus() ;
                valido = false ;
            }
            else
            {
                errorMensaje.innerHTML = "Todo va bien" ;
                valido = true ;
            }
        }

        return valido ;
        /* errorMensaje.innerHTML = "";
            valido = true; */
    }
}