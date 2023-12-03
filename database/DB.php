<?php
$servername = "localhost";
$username = "root";
$password = "";
$databasename = 'MyResume';

$conn = new mysqli($servername, $username, $password);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "CREATE DATABASE IF NOT EXISTS $databasename";

if ($conn->query($sql) === TRUE) {
    echo "Database '$databasename' created successfully<br>";
} else {
    echo "Error creating database: " . $conn->error;
}

$conn->select_db($databasename);

$usersTable = "CREATE TABLE IF NOT EXISTS users (
    user_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(30) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    user_level VARCHAR(30) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if ($conn->query($usersTable) === TRUE) {
    echo "Table 'users' created successfully<br>";
} else {
    echo "Error creating table 'users': " . $conn->error;
}

$resumesTable = "CREATE TABLE IF NOT EXISTS resumes (
    resume_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    age INT,
    user_id INT(6) UNSIGNED,
    gender VARCHAR(10) NOT NULL DEFAULT 'male',
    description VARCHAR(255) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
)";

if ($conn->query($resumesTable) === TRUE) {
    echo "Table 'resumes' created successfully<br>";
} else {
    echo "Error creating table 'resumes': " . $conn->error;
}

$languagesTable = "CREATE TABLE IF NOT EXISTS languages (
    language_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(50),
    resume_id INT UNSIGNED,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (resume_id) REFERENCES resumes(resume_id)
)";
if ($conn->query($languagesTable) === TRUE) { 
    echo "Table 'languages' created successfully<br>";
} else {
    echo "Error creating table 'languages': " . $conn->error;
}

$phonesTable = "CREATE TABLE IF NOT EXISTS phones (
    phone_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    phone_number VARCHAR(10) NOT NULL,
    resume_id INT UNSIGNED,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (resume_id) REFERENCES resumes(resume_id)
)";

if ($conn->query($phonesTable) === TRUE) {
    echo "Table 'phones' created successfully<br>";
} else {
    echo "Error creating table 'phones': " . $conn->error;
}

$degreesTable = "CREATE TABLE IF NOT EXISTS degrees (
    degree_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    resume_id INT UNSIGNED,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (resume_id) REFERENCES resumes(resume_id)
)";

if ($conn->query($degreesTable) === TRUE) {
    echo "Table 'degrees' created successfully<br>";
} else {
    echo "Error creating table 'degrees': " . $conn->error;
}

$conn->close();
?>