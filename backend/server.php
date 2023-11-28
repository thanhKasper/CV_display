<?php
// Use this to prevent cors error.
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type');

$data = ["name" => "Nguyen Van A", "age" => 21];

// Check for connection to DB
$conn = new mysqli("localhost", "root", "");
if ($conn->connect_error) {
    echo "Connection Error";
} else {
    echo "Successfully Connect to database";
}
echo json_encode($data);
