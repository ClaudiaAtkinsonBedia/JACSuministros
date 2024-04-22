window.onload = inicio; // Cargamos toda la página lo primero

function inicio()
{
    let boton = document.getElementById("submitButton"); // Cogemos el id del boton para que luego
    boton.addEventListener("click", validar); // Al hacer click podamos validarlo

    function validarEmail() // Con esta función validamos el correo electrónico
    {
        let elemento = document.getElementById("email"); // Cogemos el id del correo electrónico
        let regexC = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // La expresión regular del correo electrónico
        let errorC = document.getElementById("emailErrores"); // Cogemos el id del errorC (el div donde van los errores del correo, donde vamos a escribir cuáles son los problemas que hemos visto que con el correo)
        if (elemento.value === "") // Si el campo del correo electrónico está vacío
        {
            errorC.style.color = "red";
            errorC.innerHTML = "Debe introducir un email válido."; // Les indicamos en el div errorC que escriban su correo
            return false;
        }
        else if (!regexC.test(elemento.value)) // Si el correo electrónico que escriben no coincide con la expresión regular
        {
            errorC.style.color = "red";
            errorC.innerHTML = "El correo electrónico no cumple con los requisitos."; // Les indicamos en el div errorC que escriban un correo que cumpla con los requisitos
            return false;
        }
        else if (elemento.validity.patternMismatch) // Si el correo electrónico que escriben no coincide con la expresión regular
        {
            errorC.style.color = "red";
            errorC.innerHTML = "Formato incorrecto. Debe introducir un email válido."; // Les indicamos en el div errorC que escriban un correo que cumpla con los requisitos
            return false;
        }
        else // En caso contrario, de que todo esté correcto y hayan escrito todo correcto
        {
            errorC.innerHTML = ""; // No saltará ningun error o se borrará el error
            return true;
        }
    }


    document.getElementById("correo").addEventListener("blur", validarEmail);

    function validar(e) // Con esta función validamos todo el formulario
    {
        // Realizamos las verificaciones una por una
        /*if (!validarNombre()) 
        {
            e.preventDefault();
            return false;
        }*/
    
        if (!validarEmail()) 
        {
            e.preventDefault();
            return false;
        }

        // Validadamos la información oculta solo si está desplegada
        if (document.getElementById("mostrarMas").style.display === "none")
        {
            // Validamos la información oculta de una en una
            /*if (!validarDireccion()) 
            {
                e.preventDefault();
                return false;
            }*/
        }
    
        // Preguntamos al usuario antes de enviar el formulario
        if (confirm("¿Seguro que quiere enviar el formulario?")) 
        {
            return true;
        } else 
        {
            e.preventDefault();
            return false;
        }
    }
}