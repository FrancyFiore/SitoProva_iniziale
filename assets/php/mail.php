<?php
$nome = $_POST['nome'];
debug_to_console( $nome );
$citta = $_POST['citta'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$messaggio = $_POST['messaggio'];
$formcontent=" From: $nome \n Città: $citta \n Phone: $telefono \n Email: $email \n Message: $messaggio";
$recipient = "iperfrancy@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='form.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>
