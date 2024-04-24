window.onload = inicio;

function inicio() {
    // ------------- DECLARACIÓN DE ELEMENTOS DEL DOM ---------------

    let barraSecundaria = document.getElementById("barraSecundaria"); // Barra de navegación secundaria
    let contenidoColapsado = document.getElementById("navbarToggleExternalContent"); // Barra de contenido colapsado

    let botonCategorias = document.getElementById("botonCategorias");

    let categoria1 = document.getElementById("categoria1");
    let categoria2 = document.getElementById("categoria2");
    let categoria3 = document.getElementById("categoria3");
    let subcategoria1 = document.getElementById("subcategoria1");
    let subcategoria2 = document.getElementById("subcategoria2");
    let subcategoria3 = document.getElementById("subcategoria3");
    let subcategoria4 = document.getElementById("subcategoria4");


    // -------------- LISTENERS ----------------------

    botonCategorias.addEventListener("click", abrirCategorias);
    categoria1.addEventListener("click", abrirSubcategorias);
    categoria2.addEventListener("click", abrirSubcategorias);
    categoria1.addEventListener("click", abrirSubcategorias);


    // ------------------ ESTADO SIEMPRE ACTIVADO ---------------

    barraSecundaria.style.display = "none";


    // ------------------ FUNCIONES ----------------------

    function abrirCategorias() {

        if (barraSecundaria.style.display === "none") {
            barraSecundaria.style.display = "block";
        }
        else if (barraSecundaria.style.display === "block")
        {
            barraSecundaria.style.display = "none";
        }
    }

    function abrirSubcategorias(categoria)
    {

        switch (categoria) {
            case categoria1:
                subcategoria1.style.display = "block";
                subcategoria2.style.display = "block";
                subcategoria3.style.display = "block";
                subcategoria4.style.display = "block";
                break;
            case categoria2:
                subcategoria1.style.display = "none";
                subcategoria2.style.display = "none";
                subcategoria3.style.display = "none";
                subcategoria4.style.display = "none";
                break;
            case categoria3:
                subcategoria1.style.display = "none";
                subcategoria2.style.display = "none";
                subcategoria3.style.display = "none";
                subcategoria4.style.display = "none";
                break;
            default:
                break;
        }
    }
}