<?php
$to      = 'iperfrancy@gmail.com';
$subject = 'the subject';
$message = 'hello';
$headers = array(
    'From' => 'webmaster@example.com',
);

mail($to, $subject, $message, $headers);
?>