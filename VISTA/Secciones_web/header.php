<?php
    require_once 'CONTROLADOR/BarraSubcategoriasControl.php' ;
?>

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> J.A.C. Suministros </title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <link rel="stylesheet" href="VISTA/css/style.css">

</head>

<body>

  <!-- HEADER -->

  <header>

    <!-- BARRA SUPERIOR -->

    <div class="container">
      <div class="row">
        <div class="col-6"> <!-- Icono + link -->
          <a href="mailto:info@jacsuministros.es"> <!-- link email -->
            <i class="bi bi-envelope-fill"></i> <!-- Icono -->
            info@jacsuministros.es </a>
        </div>
        <div class="col-6 text-end"> <!-- Icono + link -->
          <a href="tel:921413272"> <!-- link teléfono -->
            <i class="bi bi-telephone-fill"></i> <!-- Icono -->
            921 41 32 72 </a>
        </div>
      </div>
    </div>

    <!-- BARRA DE NAVEGACIÓN -->

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">

        <!-- Botón menú cuando colapsa (hamburguesa) -->

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <i class="bi bi-list"></i>
        </button>
        <div class="col d-lg-none">
            <a href="index.php?pagina=home">
                <img class="mx-auto d-flex d-block d-lg-none text-center" src="VISTA/img/logo.png" alt="Bootstrap" width="80" height="74"> <!-- Logo para la versión móvil -->
            </a> 
        </div>

        <!-- Iconos CUENTA e IDIOMA versión móvil -->

        <div class="d-lg-none text-center">
          <div> <!-- Link idioma -->
            <a href="#"> ES </a> <!-- link idioma español-->
            |
            <a href="#"> EN </a> <!-- link idioma inglés -->
          </div>
          <div> <!-- Entrar en cuenta y cambiar idioma -->
            <a href="#"> Tu cuenta </a> <!-- Icono -->
          </div>
        </div>
        <!-- Fin Iconos CUENTA e IDIOMA versión móvil -->

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mx-lg-auto align-items-lg-center">
            <li class="nav-item m-lg-4">
              <a class="nav-link" href="#"role="button" aria-expanded="false">
                <span class="botonCategorias"> Categorías <i class="bi bi-chevron-down"></i> </span>
              </a>
            </li>
            <li class="nav-item d-lg-none">

                <!-- Barra de categorías para móvil -->

     <!-- Barra de categorías -->

     <div class="container">
      <div class="row">
        <div class="barraCategorias g-0">
          <nav class="navbar navbar-expand navbar-light bg-primary d-flex justify-content-center">
          <ul class="nav navbar-nav">
            <li class="nav-item">
              <a class="opcion1 nav-link opcionCategoria" href="#"> Categoría 1 </a>
            </li>
            <li class="nav-item">
              <a class="opcion2 nav-link opcionCategoria" href="#"> Categoría 2 </a>
            </li>
            <li class="nav-item">
              <a class="opcion3 nav-link opcionCategoria" href="#"> Categoría 3 </a>
            </li>
          </ul>
        </nav>
        </div>
      </div>

      <!-- Barra de subcategorías -->

      <div class="row">
        <div class="barraSubcategorias g-0">
          <nav class="navbar navbar-expand navbar-light bg-warning d-flex justify-content-center">
            <ul class="listaSubcategorias nav navbar-nav">
              <!-- <li class="nav-item">
                <a class="nav-link" href="#"> Subcategoría 1 </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"> Subcategoría 2 </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"> Subcategoría 3 </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"> Subcategoría 4 </a>
              </li> -->
            </ul>
          </nav>
        </div>
      </div>
    
    <!-- Fin de barra de categorías para móvil -->

            </li>
            <li class="nav-item">
              <a class="nav-link active m-lg-4" aria-current="page" href="#"> ¿Quiénes somos? </a>
            </li>
            <li>
                <a href="index.php?pagina=home">
                    <img class="d-flex d-none d-lg-block" src="VISTA/img/logo.png" alt="Bootstrap" width="80" height="74">   <!-- Logo para la versión escritorio -->
                </a>
            
            </li>
            <li class="nav-item">
              <a class="nav-link m-lg-4" href="index.php?pagina=contacto"> Contacto </a>
            </li>
            <li class="nav-item m-lg-4">
              <a class="nav-link" href="#"> Blog </a>
            </li>
          </ul>

          <!-- Botones CUENTA e IDIOMA versión escritorio -->
          <div class="d-none d-lg-block">
            <div> <!-- Link idioma -->
              <a href="#"> ES </a> <!-- link idioma español-->
              |
              <a href="#"> EN </a> <!-- link idioma inglés -->
            </div>
            <div> <!-- Entrar en cuenta y cambiar idioma -->
              <i class="bi bi-person-circle"></i> <!-- Icono -->
              <a href="#"> Tu cuenta </a> <!-- link tu cuenta -->
            </div>

          </div>
          <!-- Fin Botones CUENTA e IDIOMA versión escritorio -->

        </div>
      </div>
    </nav>

    <!-- Barra de categorías para escritorio -->

    <div class="container d-none d-lg-block">
      <div class="row">
        <div class="barraCategorias g-0">
          <nav class="navbar navbar-expand navbar-light bg-primary d-flex justify-content-center">
          <ul class="nav navbar-nav">
            <li class="nav-item">
              <a class="opcion1 nav-link opcionCategoria" href=""> Categoría 1 </a>
            </li>
            <li class="nav-item">
              <a class="opcion2 nav-link opcionCategoria" href="#"> Categoría 2 </a>
            </li>
            <li class="nav-item">
              <a class="opcion3 nav-link opcionCategoria" href="#"> Categoría 3 </a>
            </li>
          </ul>
        </nav>
        </div>
      </div>

      <!-- Barra de subcategorías -->

      <div class="row">
        <div class="barraSubcategorias g-0">
          <nav class="navbar navbar-expand navbar-light bg-warning d-flex justify-content-center">
            <ul class="listaSubcategorias nav navbar-nav">
             <!-- <li class="nav-item">
                  <a class="nav-link" href="#"> Subcategoría 1 </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"> Subcategoría 2 </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"> Subcategoría 3 </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"> Subcategoría 4 </a>
              </li> -->

                <?php
                    
                // require_once 'CONTROLADOR/RouteSubcategorias.php' ;
                
                ?>
            </ul>
          </nav>
        </div>
      </div>
    
  <!-- Fin de barra de categorías para escritorio -->

  </header>