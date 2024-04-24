
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> J.A.C. Suministros </title>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <link rel="stylesheet" href="css/uwu.css">
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
            <a href="index.php?pagina=home"> <img class="mx-auto d-flex d-block d-lg-none text-center" src="VISTA/img/logo.png" alt="Bootstrap" width="80"
            height="74"> </a> <!-- Logo para la versión móvil -->
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
            <li class="nav-item dropdown m-lg-4">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Categorías
              </a>
              <ul class="dropdown-menu"> <!-- Lista de categorías -->
                <li><a class="dropdown-item" href="#"> Categoría 1 </a></li>
                <li><a class="dropdown-item" href="#"> Categoría 2 </a></li>
                <li><a class="dropdown-item" href="#"> Categoría 3 </a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link active m-lg-4" aria-current="page" href="#"> ¿Quiénes somos? </a>
            </li>
            <li>
              <a href="index.php?pagina=home"><img class="d-flex d-none d-lg-block" src="VISTA/img/logo.png" alt="Bootstrap"
                  width="80" height="74"></a> <!-- Logo para la versión escritorio -->
            </li>
            <li class="nav-item">
              <a class="nav-link m-lg-4" href="index.php?pagina=contacto"> Contacto </a>
            </li>
            <li class="nav-item m-lg-4">
              <a class="nav-link" href="index.php?pagina=blog"> Blog </a>
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
  </header>
