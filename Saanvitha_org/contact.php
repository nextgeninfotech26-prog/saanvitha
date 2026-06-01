<?php
// Include PHPMailer files
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load SMTP configuration
$config = require 'config.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Get form data safely
    $first_name = isset($_POST['first_name']) ? htmlspecialchars($_POST['first_name']) : '';
    $last_name  = isset($_POST['last_name']) ? htmlspecialchars($_POST['last_name']) : '';
    $email      = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
    $phone      = isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : '';
    $service    = isset($_POST['service']) ? htmlspecialchars($_POST['service']) : '';
    $message    = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : '';

    // Full name
    $name = $first_name . " " . $last_name;

    // Create PHPMailer instance
    $mail = new PHPMailer(true);

    try {

        // SMTP Settings
        $mail->isSMTP();
        $mail->Host       = $config['host'];
        $mail->SMTPAuth   = true;
        $mail->Username   = $config['username'];
        $mail->Password   = $config['password'];
        $mail->SMTPSecure = $config['encryption'];
        $mail->Port       = $config['port'];

        // Sender
        $mail->setFrom($config['username'], 'Website Contact Form');

        // Receiver
        $mail->addAddress("yukthisocialmedia@gmail.com");

        // Email format
        $mail->isHTML(true);

        // Subject
        $mail->Subject = "New Contact Form Submission";

        // Email Body
        $mail->Body = "
            <h2>New Contact Form Submission</h2>

            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Service:</strong> $service</p>
            <p><strong>Message:</strong><br>$message</p>
        ";

        // Send Email
        $mail->send();

        echo "
        <script>
            alert('Message Sent Successfully!');
            window.location.href='contact.html';
        </script>
        ";

    } catch (Exception $e) {

        echo "
        <script>
            alert('Message could not be sent. Error: {$mail->ErrorInfo}');
            window.history.back();
        </script>
        ";
    }
}
?>