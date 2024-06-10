¡Hola, somos Claudia y Adrián! Vamos a explicar la estructura y funcionamiento generales del proyecto.

El proyecto está realizado con HTML, CSS, JavaScript y PHP.
En el diseño se utiliza Bootstrap, minimizando el uso de CSS. En JavaScript se utiliza jQuery.

La estructura del proyecto es MVC.

-------------------------------------------------------------------------------------------------------------------

El proyecto parte desde index.php. Al ejecutar ese documento abre el route.php (enrutador) y abre el home por defecto. A partir de ahí la navegación hace el resto.
Utilizamos XAMPP con el puerto 80 para ejecutarlo en local.

Las páginas están distribuidas en forma de plantillas en formato php. El header y el footer, partes comunes de cada página, son llamados en cada página (home, contacto, etc).
Entre estas dos llamadas está el main, que es la parte específica de la página en cuestión. Ahí es donde estará, por ejemplo, el formulario de contacto de la página "contacto".

Las animaciones y eventos son manejadas desde JavaScript.

Las funcionalidades de JavaScript son las siguientes:

    - Abrir y cerrar barra de categorías y subcategorías (ahora dedicamos una sección a esto).
    - Validaciones del formulario de contacto.
    - Animaciones.

-------------------------------------------------------------------------------------------------------------------

Sobre la barra de categorías/subcategorías


La barra de categorías tiene dos niveles, las categorías y las subcategorías. Con un solo nivel hubiese funcionado con Bootstrap pero con dos no conseguimos el efecto deseado.
Decidimos utilizar JavaScript para hacer tanto la animación como el comportamiento.

La primera barra se despliega o se pliega al darle al botón de las categorías del menú de navegación.
La primera barra (categorías), está realizada con HTML.

La segunda barra (subcategorías), se despliega al seleccionar alguna de las categorías de la barra anterior. Esta barra es distinta, no está hecha directamente en HTML. Se combinan PHP y JavaScript para darle forma y contenido.
JavaScript se encarga del comportamiento al hacer clic, plegado y demás. Por ejemplo, hace que la barra se sostenga mientras cambias entre subcategorías y solamente se pliegue si lo haces desde un nivel superior.
PHP es la que "pinta" el contenido. Extrae los datos de un JSON creando una lista con ellos en HTML.
De esta forma, la barra es dinámica, queremos decir con esto que bastaría con modificar los datos del JSON para crear la barra de subcategorías al completo, teniendo en cuenta que las opciones actuales son provisionales.


-------------------------------------------------------------------------------------------------------------------

Sobre el formulario de contacto

El formulario cuenta con validadaciones en cliente, esto es a través de JavaScript. Esos datos serán manejados por PHPMailer que será el responsable de procesar esos datos y enviarlos a la cuenta de correo configurada.

-------------------------------------------------------------------------------------------------------------------

Todo el contenido de la web es provisionale, incluido el logotipo en baja resolución. No hemos podido contactar con Natalia, la clienta, por lo que hay datos y preferencias que desconocemos.

-------------------------------------------------------------------------------------------------------------------


¡Muchas gracias por la oportunidad, Andrés! Nos vemos por estos mundos virtuales.

(￣y▽,￣)╭ 
