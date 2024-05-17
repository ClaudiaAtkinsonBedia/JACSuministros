<?php

// ini_set('SMTP', 'smtp.office365.com');  // Reemplaza con tu servidor SMTP
// ini_set('smtp_port', 587);          // Utiliza el puerto correcto
// ini_set('sendmail_from', 'adrianarjonabravo.hotmail.es') ;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function

require_once '../PHPMailer/src/Exception.php';
require_once '../PHPMailer/src/PHPMailer.php';
require_once '../PHPMailer/src/SMTP.php';


$metodo = $_SERVER['REQUEST_METHOD'];

if ($metodo === 'POST') {
    $nombre = filter_var($_POST['name'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $direccion = filter_var($_POST['direccion'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $telefono = filter_var($_POST['telefono'], FILTER_SANITIZE_NUMBER_INT);
    $mensaje = htmlspecialchars($_POST['mensaje'], ENT_QUOTES, 'UTF-8');

    $mail = new PHPMailer(true);


    try {
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.office365.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'adrianarjonabravo@hotmail.es';                     //SMTP username
        $mail->Password   = 'aawjxkztkljodyxl';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
        $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('adrianarjonabravo@hotmail.es', $nombre);
        $mail->addAddress('adrianarjonabravo@hotmail.es', 'JAC Suministros');     //Add a recipient
        // $mail->addAddress('ellen@example.com');               //Name is optional
        $mail->addReplyTo('info@example.com', 'JAC Suminstros');
        // $mail->addCC('cc@example.com');
        // $mail->addBCC('bcc@example.com');

        //Attachments
        // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Mensaje de ' . $nombre;
        $mail->Body    = $mensaje;
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail->CharSet = 'UTF-8';

        $mail->send();
        echo 'Message has been sent';

    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }

    //     $destinatario = 'adrian.arjona@abacodev.com';
    //     $asunto = 'Nuevo mensaje de contacto de ' . $nombre ;
    //     $cuerpo = "Nombre: $nombre\n";
    //     $cuerpo .= "Dirección: $direccion\n";
    //     $cuerpo .= "Email: $email\n";
    //     $cuerpo .= "Teléfono: $telefono\n";
    //     $cuerpo .= "Mensaje: $mensaje\n";

    //     $headers = "From: $email\r\n";

    //     mail($destinatario, $asunto, $cuerpo, $headers);
    //     echo 'success';
    // }
    // else
    // {
    //     echo 'error';
}


// ENCRYPTION_SMTPS
