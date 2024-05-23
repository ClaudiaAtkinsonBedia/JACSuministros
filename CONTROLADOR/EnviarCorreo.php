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
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->SMTPDebug = 0;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.office365.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'adrianarjonabravo@hotmail.es';                     //SMTP username
        $mail->Password   = 'aawjxkztkljodyxl';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
        $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('adrianarjonabravo@hotmail.es', html_entity_decode($nombre, ENT_QUOTES, 'UTF-8'));
        $mail->addAddress('adrianarjonabravo@hotmail.es', 'JAC Suministros');     //Add a recipient
        // $mail->addAddress('ellen@example.com');               //Name is optional
        $mail->addReplyTo($email, html_entity_decode($nombre, ENT_QUOTES, 'UTF-8'));
        // $mail->addCC('cc@example.com');
        // $mail->addBCC('bcc@example.com');

        //Attachments
        // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

        function mensajeHTML($nombre, $direccion, $email, $telefono, $mensaje) {
            
            $html = '
            <!DOCTYPE html>
            <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title> Mensaje de ' . $nombre . ' </title>
                </head>
                <body>
            
                    <h3> Tiene un mensaje de ' . $nombre . ' </h3>

                    <hr>

                    <h5> MENSAJE: </h5>
                    
                     <p> ' . $mensaje . '</p>

                    <br><br>
                    <hr>
 
                    <h3> Los datos de contacto son: </h3>
                    <ul>
                        <li> Dirección:
                            <br> 
                            ' . $direccion . '
                        </li>

                        <br>

                        <li> Email:
                            <br> 
                            <a href="mailto:' . $email . '">' . $email . '</a>
                        </li>

                        <br>

                        <li> Teléfono: 
                            <br> 
                            <a href="tel:' . $telefono . '">' . $telefono . '</a>
                        </li>
                    </ul>
                </body>
            </html>
            ';
            return $html ;
        }

        $mensajeTextoPlano = "
        Tiene un mensaje de $nombre \n\n
        MENSAJE: $mensaje \n\n
        DATOS DE CONTACTO: \n
        \t Dirección: $direccion \n
        \t Email: $email \n
        \t Teléfono: $telefono
        " ;

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Mensaje de ' . html_entity_decode($nombre, ENT_QUOTES, 'UTF-8');
        $mail->Body    = mensajeHTML($nombre, $direccion, $email, $telefono, $mensaje) ;
        $mail->AltBody = $mensajeTextoPlano ;

        $mail->CharSet = 'UTF-8';

        $mail->send();
        // echo 'Message has been sent';
        header('Location: ../index.php?pagina=contacto&enviado=true');
        exit(); // Detiene la ejecución del script después de la redirección

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
