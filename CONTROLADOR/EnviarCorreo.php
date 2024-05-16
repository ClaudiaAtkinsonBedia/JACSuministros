<?php

// ini_set('SMTP', 'smtp.office365.com');  // Reemplaza con tu servidor SMTP
// ini_set('smtp_port', 587);          // Utiliza el puerto correcto
// ini_set('sendmail_from', 'correo.hotmail.es') ;

$metodo = $_SERVER['REQUEST_METHOD'] ;

if ($metodo === 'POST') {
    $nombre = filter_var($_POST['name'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $direccion = filter_var($_POST['direccion'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $telefono = filter_var($_POST['telefono'], FILTER_SANITIZE_NUMBER_INT);
    $mensaje = htmlspecialchars($_POST['mensaje'], ENT_QUOTES, 'UTF-8');

    $destinatario = 'correo@gmail.com';
    $asunto = 'Nuevo mensaje de contacto de ' . $nombre ;
    $cuerpo = "Nombre: $nombre\n";
    $cuerpo .= "Dirección: $direccion\n";
    $cuerpo .= "Email: $email\n";
    $cuerpo .= "Teléfono: $telefono\n";
    $cuerpo .= "Mensaje: $mensaje\n";

    $headers = "From: $email\r\n";

    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        echo 'success';
    } else {
        echo 'error';
    }
}