<?php
/**
 * APEX RACING SYNDICATE - CONTACT FORM HANDLER
 * Directs incoming ownership inquiries to the syndicate manager's inbox.
 */

// REPLACE WITH YOUR DESTINATION EMAIL ADDRESS:
$recipient_email = "director@apexsyndicate.com"; 
$email_subject   = "New Syndicate Ownership Enquiry - Apex Racing";

// Ensure request is POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit;
}

// Basic anti-spam check (honeypot)
if (!empty($_POST["website_trap"])) {
    // Spambot filled honeypot field
    echo json_encode(["status" => "success", "message" => "Enquiry received"]);
    exit;
}

// Sanitize inputs
$name        = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
$email       = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$phone       = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS);
$interest    = filter_input(INPUT_POST, 'interest', FILTER_SANITIZE_SPECIAL_CHARS);
$share_size  = filter_input(INPUT_POST, 'share_size', FILTER_SANITIZE_SPECIAL_CHARS);
$message     = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);

// Validate mandatory fields
if (!$name || !$email || !$phone) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Please complete all required fields (Name, Email, Phone)."]);
    exit;
}

// Compose email body
$email_body  = "You have received a new thoroughbred syndicate enquiry from your website:\n\n";
$email_body .= "--------------------------------------------------\n";
$email_body .= "Full Name:      " . $name . "\n";
$email_body .= "Email:          " . $email . "\n";
$email_body .= "Phone:          " . $phone . "\n";
$email_body .= "Interest:       " . ($interest ?: "General Prospectus") . "\n";
$email_body .= "Share Preference: " . ($share_size ?: "Not Specified") . "\n";
$email_body .= "--------------------------------------------------\n\n";
$email_body .= "Additional Notes / Message:\n";
$email_body .= ($message ?: "No additional message provided.") . "\n\n";
$email_body .= "Submitted at:   " . date("Y-m-d H:i:s T") . "\n";
$email_body .= "IP Address:     " . $_SERVER['REMOTE_ADDR'] . "\n";

// Headers
$headers  = "From: Apex Syndicate <no-reply@" . $_SERVER['SERVER_NAME'] . ">\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$mail_sent = @mail($recipient_email, $email_subject, $email_body, $headers);

if ($mail_sent) {
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Enquiry received. We will contact you within 24 hours."]);
} else {
    // If standard mail() is unconfigured on the server, fallback response
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Could not send email. Please email direct at " . $recipient_email]);
}
?>
