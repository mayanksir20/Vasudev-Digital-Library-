<?php
// CORS headers allow karne ke liye taaki React app se request aa sake
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // React se aane wala JSON data read karna
    $input = json_decode(file_get_contents("php://input"), true);

    $name = strip_tags(trim($input["name"] ?? ""));
    $phone = strip_tags(trim($input["phone"] ?? ""));
    $email = filter_var($input["email"] ?? "", FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($input["message"] ?? ""));

    if (empty($name) || empty($phone) || empty($message)) {
        echo json_encode(["status" => "error", "message" => "Please fill all required fields."]);
        exit;
    }

    // --- 1. EMAIL BHEJNE KA CODE ---
   $to = "info@vasudevlibrary.com"; 
    $subject = "New Website Query from " . $name;
    
    $email_content = "Name: $name\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Email: " . ($email ? $email : "N/A") . "\n\n";
    $email_content .= "Message:\n$message\n";

    $headers = "From: noreply@" . $_SERVER['HTTP_HOST'];

    // Mail send karna
    @mail($to, $subject, $email_content, $headers);

    // Response success bhejna
    echo json_encode(["status" => "success", "message" => "Query sent successfully!"]);
    exit;
}
?>