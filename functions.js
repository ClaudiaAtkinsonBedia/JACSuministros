window.onload = inicio; // Cargamos toda la página lo primero

function inicio() {


    // DECLARACIONES DE ELEMENTOS DEL DOM

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

    // LISTENERS

    email.addEventListener("input", function () {
        cambiaColorInput(errorCorreo, validarEmail());
    }, false);


    // FUNCIONES

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

    function validarEmail() {
        if (email.value === "VALIDO") {
            return false;
        }
        else {
            return true;
        }
    }
}
