<?php
// Prevent direct access to this file
if (!isset($_SERVER['HTTP_X_REQUESTED_WITH']) && empty($_POST)) {
    header('HTTP/1.0 403 Forbidden');
    exit('Direct access to this file is forbidden.');
}

// Define response array
$response = [
    'status' => 'error',
    'message' => 'Something went wrong. Please try again.'
];

// Check if form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data and sanitize
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    
    // Validate form data
    if (empty($name) || empty($email) || empty($message)) {
        $response['message'] = 'All fields are required.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['message'] = 'Please enter a valid email address.';
    } else {
        // Set recipient email
        $to = 'micah@digitale-tech.com'; // CHANGE THIS TO YOUR EMAIL ADDRESS
        
        // Set email subject
        $subject = 'New Contact Form Submission from ' . $name;
        
        // Build email content
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";
        
        // Build email headers
        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        
        // Send email
        $mail_sent = mail($to, $subject, $email_content, $headers);
        
        if ($mail_sent) {
            $response['status'] = 'success';
            $response['message'] = 'Your message has been sent successfully!';
        } else {
            $response['message'] = 'Failed to send your message. Please try again later.';
        }
    }
}

// Return JSON response
header('Content-Type: application/json');
echo json_encode($response);
?> 