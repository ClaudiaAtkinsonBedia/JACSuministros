
// El título aparece poco a poco

// $(document).ready(function(){
//     // Selecciona los elementos del título y ocúltalos inicialmente
//     $('.card-title').hide();

//     // Usa fadeIn para que los títulos aparezcan poco a poco
//     $('.card-title').fadeIn(4000); // 2000 milisegundos = 2 segundos
//   });


$(document).ready(function(){
    // Aplica la clase de animación a los títulos
    $('.card-title').each(function(index) {
      let $this = $(this);
      setTimeout(function() {
        $this.addClass('animate');
      }, index * 200); // Retraso para cada título
    });
  });
  

    // Elimina la clase de animación cuando la animación de despliegue del texto termine
    $('.card-title').on('animationend', function() {
        $(this).removeClass('animate');
      });