<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$email_from = '3D4E.UCLA@gmail.com';
$email_subject = "New Form Submission";
$email_body = "New Message From: $name\n"
        . "Email Address: $email\n"
        . "Message:\n $message";

$to = "3D4E.UCLA@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);
?>
