window.onload = inicio;

function inicio() {
    
    // ------------- DECLARACIÓN DE ELEMENTOS DEL DOM ---------------


    // -------------- LISTENERS ----------------------


    // ------------------ FUNCIONES ----------------------

    // ------------------ FUNCIONES JQUERY ---------------

    // Colapsar y animación de expandir para barra de navegación de categorías

    $(document).ready(function() {
        $(".botonCategorias").click(function() {
          $(".barraCategorias").slideToggle();
          $(".barraSubcategorias").slideUp(); // Oculta la barra de subcategorías
        });
      
        $(".opcionCategoria").click(function() {
          $(".barraSubcategorias").slideToggle();
        });
      });
}

