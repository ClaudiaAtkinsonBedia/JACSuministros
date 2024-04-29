window.onload = function() {

    // ------------ DECLARACIÓN DE ELEMENTOS DEL DOM ---------------

    // BOTÓN E INPUTS
    let nombre = document.getElementById("name"); // Nombre
    let email = document.getElementById("email"); // Email
    let telefono = document.getElementById("telefono"); // Teléfono
    let mensaje = document.getElementById("mensaje"); // Mensaje
    let form = document.getElementById("formContacto"); // Formulario de contacto

    // MENSAJES DE ERRORES
    let errorNombre = document.getElementById("nameErrores"); // Nombre
    let errorCorreo = document.getElementById("emailErrores"); // Email
    let errorTelefono = document.getElementById("telefonoErrores"); // Teléfono
    let errorMensaje = document.getElementById("mensajeErrores"); // Mensaje
    let errorSubmit = document.getElementById("errorSubmit"); // Mensaje junto al botón de envío (formulario)


    // -------------------------- OTRAS VARIABLES -----------------------------------

    let nombreValido = false ;
    let emailValido = false ;
    let telefonoValido = false ;
    let mensajeValido = false ;

    // ------------ FUNCIONES DE VALIDACIÓN ---------------------



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
        let regNombre = /^[A-ZÁÉÍÓÚÄËÏÖÜÑæaø'-záéíóúäëïöüñ?]+(?:[- ][A-ZÁÉÍÓÚÄËÏÖÜÑæaø'-záéíóúäëïöüñ]+)+$/;
        let dobleEspacio = /  /g;
        let limiteCaracteres = /^.{1,50}$/;

        if (nombre.value.trim() === "") {
            errorNombre.innerHTML = "El nombre es requerido.";
            nombre.focus();
            valido = false;
        } else if (!limiteCaracteres.test(nombre.value)) {
            errorNombre.innerHTML = "El máximo son 50 caracteres.";
            nombre.focus();
            valido = false;
        } else if (dobleEspacio.test(nombre.value)) {
            errorNombre.innerHTML = "No se permiten dos espacios seguidos.";
            nombre.focus();
            valido = false;
        } else if (!regNombre.test(nombre.value)) {
            errorNombre.innerHTML = "El nombre no es válido. <br> " +
                "El nombre debe incluir nombre y apellido(s). <br>" +
                "Asegúrese de que esté bien escrito. Revise los caracteres especiales.";
            nombre.focus();
            valido = false;
        } else {
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
        let regexC = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email.value === "") {
            errorCorreo.innerHTML = "El correo electrónico es requerido.";
            email.focus() ;
            return false;
        } else if (!regexC.test(email.value)) {
            errorCorreo.innerHTML = "El correo electrónico no cumple con los requisitos.";
            email.focus() ;
            return false;
        } else {
            errorCorreo.innerHTML = "";
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
    function validarTelefono() {
        let regexT = /^\d{9}$/;
        if (telefono.value === "") {
            errorTelefono.innerHTML = "El teléfono es requerido.";
            telefono.focus() ;
            return false;
        } else if (!regexT.test(telefono.value)) {
            errorTelefono.innerHTML = "El teléfono debe tener 9 dígitos.";
            telefono.focus();
            return false;
        } else {
            errorTelefono.innerHTML = "";
            return true;
        }
    }

    /**
     * Función que sirve para validar el mensaje del formulario.
     * Requisitos:
     *  - Debe de tener entre 20 y 500 caracteres.
     *  - No puede estar vacío.
     * 
     * @returns {boolean} Devuelve true si el mensaje es correcto, false en caso contrario.
     */
    function validarMensaje() {
        let valido = false;
        let limiteMinimoCaracteres = /^.{20,}$/;
        let limiteMaximoCaracteres = /^.{0,500}$/;

        if (mensaje.value.trim() === "") {
            errorMensaje.innerHTML = "El mensaje es requerido.";
            mensaje.focus();
            valido = false;
        } else {
            if (!limiteMinimoCaracteres.test(mensaje.value)) {
                errorMensaje.innerHTML = "El mensaje debe tener un mínimo de 20 caracteres.";
                mensaje.focus();
                valido = false;
            } else if (!limiteMaximoCaracteres.test(mensaje.value)) {
                let longitud = mensaje.value.length;
                errorMensaje.innerHTML = longitud + "/500 <br>" +
                    "El mensaje debe tener un máximo de 500 caracteres.";
                mensaje.focus();
                valido = false;
            } else {
                let longitud = mensaje.value.length;
                errorMensaje.innerHTML = longitud + "/500";
                valido = true;
            }
        }

        return valido;
    }


    /**
     * Función que sirve para validar el formulario. Reúne todas las validaciones individuales y valida el formulario 
     * si todas son validadas. En caso de que alguna de las partes no sea validada, el formulario no será validado.
     * 
     * @param {*} e 
     */
    function validarFormulario(e) {

        let valido = false;

        if (nombreValido && emailValido && telefonoValido && mensajeValido)
        {
            errorSubmit.innerHTML = "TODO ESTÁ BIEN" ;
            valido = true;
        }
        else
        {
            errorSubmit.style.color = "red";
            errorSubmit.innerHTML = "Hay campos que requieren atención" ;
            valido = false ;
            e.preventDefault();
        }

        return valido ;
    }

    // ------------ FUNCIONES JQUERY ---------------

    // Colapsar y animación de expandir para barra de navegación de categorías

    $(document).ready(function() {
        $(".botonCategorias").click(function() {
            $(".barraCategorias").slideToggle();
            $(".barraSubcategorias").slideUp();
        });

        $(".opcionCategoria").click(function() {
            $(".barraSubcategorias").slideToggle();
        });
    });

    // -------------- LISTENERS ----------------------

    nombre.addEventListener("input", function() {
        nombreValido = validarNombre();
        cambiaColorInput(errorNombre, validarNombre());
    }, false);

    email.addEventListener("input", function() {
        emailValido = validarEmail();
        cambiaColorInput(errorCorreo, validarEmail());
    }, false);

    telefono.addEventListener("input", function() {
        telefonoValido = validarTelefono();
        cambiaColorInput(errorTelefono, validarTelefono());
    }, false);

    mensaje.addEventListener("input", function() {
        mensajeValido = validarMensaje() ;
        cambiaColorInput(errorMensaje, validarMensaje());
    }, false);

    form.addEventListener("input", validarFormulario, false) ;

    form.addEventListener("submit", validarFormulario, false);
    form.addEventListener("submit", darFoco, false);


    // -------------- FUNCIONES AUXILIARES ----------------------


    /**
     *  Función que sirve para cambiar de color el texto del input en función de su estado:
     *  - Si está vacío se pone rojo.
     *  - Si está incorrecto se pone rojo.
     *  - Si todo va bien se pone verde.
     * 
     * @param {*} elemento Elemento del DOM que queremos modificar.
     * @param {boolean} esValido Para distinguir si es válido o no, según las preferencias del formulario.
     */
    function cambiaColorInput(elemento, esValido) {
        if (elemento.value == "") {
            elemento.style.color = "red";
        } else if (esValido) {
            elemento.style.color = "green";
        } else {
            elemento.style.color = "red";
        }
    }


    function darFoco() {
        
        if (nombreValido === false)
        {
            nombre.focus() ;
        }
        else if (emailValido === false)
        {
            email.focus() ;
        }
        else if (telefonoValido === false)
        {
            telefono.focus() ;
        }
        else if (mensajeValido === false)
        {
            mensaje.focus() ;
        }

    }
};
