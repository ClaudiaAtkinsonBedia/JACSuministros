window.onload = function () {

    // ------------ DECLARACIÓN DE ELEMENTOS DEL DOM ---------------

    // BOTÓN E INPUTS
    let nombre = document.getElementById("name"); // Nombre
    let email = document.getElementById("email"); // Email
    let telefono = document.getElementById("telefono"); // Teléfono
    let mensaje = document.getElementById("mensaje"); // Mensaje
    let form = document.getElementById("formContacto"); // Formulario de contacto
    let opcion1 = document.getElementById("opcion1"); // La opción 1 de las categorías
    let opcion2 = document.getElementById("opcion2"); // La opción 2 de las categorías
    let opcion3 = document.getElementById("opcion3"); // La opción 3 de las categorías

    // MENSAJES DE ERRORES
    let errorNombre = document.getElementById("nameErrores"); // Nombre
    let errorCorreo = document.getElementById("emailErrores"); // Email
    let errorTelefono = document.getElementById("telefonoErrores"); // Teléfono
    let errorMensaje = document.getElementById("mensajeErrores"); // Mensaje
    let errorSubmitMovil = document.getElementById("errorSubmitMovil"); // Mensaje junto al botón de envío para versión móvil (formulario)
    let errorSubmitEscritorio = document.getElementById("errorSubmitEscritorio"); // Mensaje junto al botón de envío para versión escritorio (formulario)
    


    // -------------------------- OTRAS VARIABLES -----------------------------------

    let nombreValido = false;
    let emailValido = false;
    let telefonoValido = false;
    let mensajeValido = false;

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
            email.focus();
            return false;
        } else if (!regexC.test(email.value)) {
            errorCorreo.innerHTML = "El correo electrónico no cumple con los requisitos.";
            email.focus();
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
            telefono.focus();
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

        if (nombreValido && emailValido && telefonoValido && mensajeValido) {
            errorSubmitEscritorio.innerHTML = "";
            errorSubmitMovil.innerHTML = "";
            valido = true;
        }
        else {
            errorSubmitMovil.style.color = "red";
            errorSubmitEscritorio.style.color = "red";
            errorSubmitMovil.innerHTML = "Hay campos que requieren atención";
            errorSubmitEscritorio.innerHTML = "Hay campos que requieren atención";
            valido = false;
            e.preventDefault();
        }

        return valido;
    }

    // ------------ FUNCIONES JQUERY ---------------

    // Colapsar y animación de expandir para barra de navegación de categorías

    $(document).ready(function () {

        let jsonTroceado ; // Es la parte del JSON que se extrae para el contenido de la barra de subcategorías
        let opcionCategoria ; // Es la opción capturada a partir de la elección del usuario, servirá para compararla consigo misma
        let iguales = false ; // Si la comparación de la variable opcionCategoria consigo misma es igual, true; false en caso contrario

        
    // Capturando el clic en las opciones de categorías

    $(".opcion1").click(function() // Si hacemos click en la opción 1
    {
        if (opcionCategoria === "opcion1") // Si la opción seleccionada coincide con la primera opcion, es decir, son iguales...
        {
            iguales = true ; // ...igualamos iguales a true
        }
        else 
        {
            iguales = false ; // Se reinicia el valor a false para que pueda volver al principio
        }
        opcionCategoria = "opcion1" ;
    }); 

    $(".opcion2").click(function() // Si hacemos click en la opción 2
    {
        if (opcionCategoria === "opcion2") // Si la opción seleccionada coincide con la primera opcion, es decir, son iguales...
        {
            iguales = true ; // ...igualamos iguales a true
        }
        else
        {
            iguales = false ; // Se reinicia el valor a false para que pueda volver al principio
        }
        opcionCategoria = "opcion2" ;
    }); 

    $(".opcion3").click(function() // Si hacemos click en la opción 3
    {
        if (opcionCategoria === "opcion3") // Si la opción seleccionada coincide con la primera opcion, es decir, son iguales...
        {
            iguales = true ; // ...igualamos iguales a true
        }
        else
        {
            iguales = false ; // Se reinicia el valor a false para que pueda volver al principio
        }
        opcionCategoria = "opcion3" ;
    }); 

        // Colapsa las dos barras cuando se hace clic en el botón categorías
        
        $(".botonCategorias").click(function () {
            $(".barraCategorias").slideToggle(); // Despliega y despliega barra de categorías
            $(".barraSubcategorias").slideUp(); // Oculta la barra de subcategorías
        });


        // Muestra o colapsa la barra de subcategorías
        
        $(".opcionCategoria").click(function () {

            if (!$(".barraSubcategorias").is(":visible")) // Si la barra de subcategorias es visible...
            {
                $(".barraSubcategorias").slideDown() ; // ...se baja la barra de subcategorias
            }
            else if(iguales && $(".barraSubcategorias").is(":visible")) // Si la opción seleccionada por el usuario es la misma, estando la barra visible...
            {
                $(".barraSubcategorias").slideUp() ; // ...se sube la barra de subcategorias
                
            }

        });


        // Capturando el clic en las opciones de navegación
        $('.opcionCategoria').click(function (event) {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

            // Obtener la categoría seleccionada
            

            // Hacer la solicitud AJAX para obtener los datos
            $.ajax({
                // url: `http://localhost/JAC_Suministros/CONTROLADOR/RouteSubcategorias.php?opcion=${categoria}`,
                url: `http://localhost/JAC_Suministros/MODELO/JSON/Subcategorias.json`,
                method: 'GET',
                dataType: 'json',
                // data: { categoria: categoria },
                success: function (response) {
                    // Manejar la respuesta del servidor
                    console.log('Datos recibidos:', response) ;

                    // Por ejemplo, mostrar los datos en algún lugar de tu página
                    // Aquí asumo que tienes un elemento con id="datos" donde deseas mostrar los datos
                    actualizarBarraSubcategorias(opcionCategoria, response) ;
                },
                error: function (xhr, status, error) {
                    // Manejar cualquier error que ocurra durante la solicitud
                    console.error('Error al obtener los datos:', error);
                }
            });
        });
          

       function actualizarBarraSubcategorias(opcion, datos){

        let barraSubcategorias = $('.listaSubcategorias') ;
        barraSubcategorias.empty() ;


        switch (opcion) {
            
            case "opcion1":
                // alert('Categoría 1') ;
                jsonTroceado = datos['opcion1'] ;
                break;
                
            case "opcion2":
                // alert('categoría 2') ;
                jsonTroceado = datos['opcion2'] ;
            break;

            case "opcion3":
                // alert('categoría 3') ;
                jsonTroceado = datos['opcion3'] ;
            break;

            default:
                break;
        }
        
        
        /*$.each(jsonTroceado, function (index, subcategoria) {
            let elementoSubcategoria = $('<li>').addClass('nav-link').attr('href', '#').text(subcategoria);
            barraSubcategorias.append(elementoSubcategoria);
        });*/

        $.each(jsonTroceado, function (index, subcategoria) {
            
            let elementoSubcategoria = $('<li>').addClass('nav-item');
            elementoSubcategoria.append($('<a>').addClass('nav-link').attr('href','index.php?pagina=' + subcategoria[1]).text(subcategoria[0]));
            elementoSubcategoria.append($('</a>'));
            elementoSubcategoria.append($('</li>'));
            
            barraSubcategorias.append(elementoSubcategoria);
        })
       }
    });


    // Petición AJAX para barra de subcategorías

    // $.ajax({
    //     url: 'http://localhost/JAC_Suministros/CONTROLADOR/RouteSubcategorias.php?opcion=opcion1',
    //     type: 'GET',
    //     success: function(respuesta) {
    //         // Manejo de la respuesta exitosa
    //       console.log(respuesta) ;
    //     },
    //     error: function(jqXHR, textStatus, errorThrown) {
    //         // Manejo del error
    //         console.error('Error en la barra de subcategorías:', textStatus, errorThrown);
    //     }
    // });


    // -------------- LISTENERS ----------------------

    nombre.addEventListener("input", function () {
        nombreValido = validarNombre();
        cambiaColorInput(errorNombre, validarNombre());
    }, false);

    email.addEventListener("input", function () {
        emailValido = validarEmail();
        cambiaColorInput(errorCorreo, validarEmail());
    }, false);

    telefono.addEventListener("input", function () {
        telefonoValido = validarTelefono();
        cambiaColorInput(errorTelefono, validarTelefono());
    }, false);

    mensaje.addEventListener("input", function () {
        mensajeValido = validarMensaje();
        cambiaColorInput(errorMensaje, validarMensaje());
    }, false);

    form.addEventListener("input", validarFormulario, false);

    form.addEventListener("submit", validarFormulario, false);
    form.addEventListener("submit", darFoco, false);

    // opcion1.addEventListener("click", function(){
    //     opcionCategoria = "opcion1";
    // }, false);

    // opcion2.addEventListener("click", function(){
    //     opcionCategoria = "opcion2";
    // }, false);

    // opcion3.addEventListener("click", function(){
    //     opcionCategoria = "opcion3";
    // }, false);

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

    /**
     * Función que sirve para dar foco al primer campo no validado del formulario.
     */
    function darFoco() {

        if (nombreValido === false) {
            nombre.focus();
        }
        else if (emailValido === false) {
            email.focus();
        }
        else if (telefonoValido === false) {
            telefono.focus();
        }
        else if (mensajeValido === false) {
            mensaje.focus();
        }

    }
};
