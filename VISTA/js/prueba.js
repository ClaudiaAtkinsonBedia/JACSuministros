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

    // ------------ FUNCIONES DE VALIDACIÓN ---------------------

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

    function validarEmail() {
        let regexC = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email.value === "") {
            errorCorreo.innerHTML = "El correo electrónico es requerido.";
            return false;
        } else if (!regexC.test(email.value)) {
            errorCorreo.innerHTML = "El correo electrónico no cumple con los requisitos.";
            return false;
        } else {
            errorCorreo.innerHTML = "";
            return true;
        }
    }

    function validarTelefono() {
        let regexT = /^\d{9}$/;
        if (telefono.value === "") {
            errorTelefono.innerHTML = "El teléfono es requerido.";
            return false;
        } else if (!regexT.test(telefono.value)) {
            errorTelefono.innerHTML = "El teléfono debe tener 9 dígitos.";
            return false;
        } else {
            errorTelefono.innerHTML = "";
            return true;
        }
    }

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

    function validarFormulario(e) {
        let valido = false;
        if (validarNombre() && validarEmail() && validarTelefono() && validarMensaje()) {
            valido = true;
        } else {
            e.preventDefault();
        }
    }

    // ------------ FUNCIONES JQUERY ---------------

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
        cambiaColorInput(errorNombre, validarNombre());
    }, false);

    email.addEventListener("input", function() {
        cambiaColorInput(errorCorreo, validarEmail());
    }, false);

    telefono.addEventListener("input", function() {
        cambiaColorInput(errorTelefono, validarTelefono());
    }, false);

    mensaje.addEventListener("input", function() {
        cambiaColorInput(errorMensaje, validarMensaje());
    }, false);

    form.addEventListener("submit", validarFormulario, false);

    // -------------- FUNCIONES AUXILIARES ----------------------

    function cambiaColorInput(elemento, esValido) {
        if (elemento.value == "") {
            elemento.style.color = "red";
        } else if (esValido) {
            elemento.style.color = "green";
        } else {
            elemento.style.color = "red";
        }
    }
};
