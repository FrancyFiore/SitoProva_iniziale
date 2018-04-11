<?php
$name = $_POST['contact-nome'];
$city = $_POST['contact-città'];
$phone = $_POST['contact-telefono'];
$email = $_POST['contact-email'];
$message = $_POST['contact-messaggio'];
$formcontent=" From: $name \n Città: $city \n Phone: $phone \n Email: $email \n Message: $message";
$recipient = "YOUREMAIL@HERE.COM";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='form.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>
