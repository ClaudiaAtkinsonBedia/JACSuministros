
 <!-- MIGAS DE PAN -->

  <div class="container mt-2">
    <div class="row">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.php?pagina=home"> Inicio </a></li>
          <li class="breadcrumb-item active" aria-current="page"> Contacto </li>
        </ol>
      </nav>
    </div>
  </div>

<!-- MAIN -->
  
  <main>

  <div class="container px-3 px-lg-0 my-5">
    <div class="row">

      <div class="card text-bg-dark g-0">
        <img src="VISTA/img/fondo_about_alt4.jpg" class="card-img" alt="fondo Sobre Nosotros">
        <div class="card-img-overlay d-flex justify-content-center align-items-center">
          <h1 class="contacto card-title d-none d-lg-block display-1 ms-5 ps-5"> Contacto </h1> <!-- Tamaño escritorio -->
          <h1 class="contacto card-title d-lg-none display-5"> Contacto </h1> <!-- Tamaño móvil -->
        </div>
      </div>

    </div>
  </div>

    <div class="container">
      <div class="row">
        <div class="col">
          <h3 class="mt-5 text-center"> Formulario de contacto </h3>
          <p class="my-5 text-center">
            ¿Tiene alguna duda? ¿No encuentra lo que está buscando? <br>
            Si desea realizar cualquier consulta, rellene el siguiente formulario de contacto y le responderemos lo
            antes posible.
          </p>
        </div>

        <!-- FORMULARIO DE CONTACTO -->
        
        <form id="formContacto" action="CONTROLADOR/EnviarCorreo.php" method="post" novalidate>
          
          <!-- Nombre (obligatorio) -->

          <div class="col-10 col-lg-6 mb-3 mx-auto">
            <label for="name" class="form-label"> Nombre completo: </label>
            <input type="text" class="form-control" id="name" name="name" aria-describedby="nameHelp"
              placeholder="Ejemplo: Ariadna Peña López">
            <div id="nameErrores" class="form-text"> Obligatorio </div>
          </div>

          <!-- Dirección -->

          <div class="col-10 col-lg-6 mb-3 mx-auto">
            <label for="direccion" class="form-label"> Dirección: </label>
            <input type="text" class="form-control" id="direccion" name="direccion" aria-describedby="direccionHelp"
              placeholder="Ejemplo: C/ La Almadraba 5, 3ºA Segovia 40005">
            <div id="direccionErrores" class="form-text"> </div>
          </div>

          <!-- Correo electrónico (obligatorio) -->

          <div class="col-10 col-lg-6 mb-3 mx-auto">
            <label for="email" class="form-label"> Correo electrónico: </label>
            <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp"
              placeholder="Ejemplo: correo@correo.com">
            <div id="emailErrores" class="form-text"> Obligatorio </div>
          </div>

          <!-- Teléfono (obligatorio) -->
          
          <div class="col-10 col-lg-6 mb-3 mx-auto">
            <label for="telefono" class="form-label"> Teléfono: </label>
            <input type="text" class="form-control" id="telefono" name="telefono" placeholder="Ejemplo: 987654321">
            <div id="telefonoErrores" class="form-text"> Obligatorio </div>
          </div>
          
          <!-- Su mensaje (obligatorio) -->

          <div class="col-10 col-lg-6 mb-3 mx-auto">
            <label for="mensaje" class="form-label"> Su mensaje: </label>
            <textarea class="form-control" id="mensaje" name="mensaje" rows="3" aria-describedby="mensajeHelp" placeholder="Ejemplo: Les escribo para preguntarles..."></textarea>
            <div id="mensajeErrores" class="form-text"> Obligatorio </div>
          </div>
                    
          <!-- Botón de envío -->

          <p class="d-lg-none text-center" id="errorSubmitMovil"></p> <!-- Mensaje confirmación de envío para versión móvil -->

          <div class="col-10 col-lg-6 d-flex mx-auto justify-content-center justify-content-lg-between mt-4 mb-5">
              <p class="d-none d-lg-block" id="errorSubmitEscritorio"></p> <!-- Mensaje confirmación de envío -->
              <button id="submitButton" type="submit" class="btn btn-warning"> Enviar formulario </button>
          </div>

        </form>

      </div>
    </div>
  </main>