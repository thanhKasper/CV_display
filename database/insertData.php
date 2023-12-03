<?php
$servername = "localhost";
$username = "root";
$password = "";
$databasename = 'MyResume';

$conn = new mysqli($servername, $username, $password, $databasename);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function removeDiacritics($str) {
    $str = strtolower($str);
    $str = str_replace(
        array('á', 'à', 'ả', 'ã', 'ạ', 'ă', 'ắ', 'ằ', 'ẳ', 'ẵ', 'ặ', 'â', 'ấ', 'ầ', 'ẩ', 'ẫ', 'ậ', 'đ', 'é', 'è', 'ẻ', 'ẽ', 'ẹ', 'ê', 'ế', 'ề', 'ể', 'ễ', 'ệ', 'í', 'ì', 'ỉ', 'ĩ', 'ị', 'ó', 'ò', 'ỏ', 'õ', 'ọ', 'ô', 'ố', 'ồ', 'ổ', 'ỗ', 'ộ', 'ơ', 'ớ', 'ờ', 'ở', 'ỡ', 'ợ', 'ú', 'ù', 'ủ', 'ũ', 'ụ', 'ư', 'ứ', 'ừ', 'ử', 'ữ', 'ự', 'ý', 'ỳ', 'ỷ', 'ỹ', 'ỵ'),
        array('a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'd', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'i', 'i', 'i', 'i', 'i', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'y', 'y', 'y', 'y', 'y'),
        $str
    );
    $str = preg_replace('/[^a-z0-9]+/', '', $str);
    return $str;
}
function generateEmail($name) {
    $emailName = strtolower(str_replace(' ', '', $name));
    $emailName = removeDiacritics($emailName);
    return $emailName . "@gmail.com";
}

$userNames = array(
    "John Doe", "Jane Smith", "Nguyễn Văn A", "Mary Johnson", "Trần Hoàn Hậu",
    "Robert Wilson", "Lê Ngọc Diệu", "Linda Davis", "Michael Lee", "Susan Brown",
    "Phạm Thị Minh", "Trần Thanh Hà", "Lê Quốc Anh", "Nguyễn Hoàng Nam", "Hoàng Bảo Trâm",
    "Vũ Nhật Linh", "Emma Wilson", "Oliver Smith", "Sophia Nguyen", "Jacob Jones"
);

$user_emails = array_map('generateEmail', $userNames);

$resumeData = array(
    array("John Doe", 28, "Male", "Software Developer"),
    array("Jane Smith", 32, "Female", "Data Analyst"),
    array("Nguyễn Văn A", 25, "Male", "Web Developer"),
    array("Mary Johnson", 30, "Female", "Graphic Designer"),
    array("Trần Hoàn Hậu", 29, "Male", "Marketing Manager"),
    array("Robert Wilson", 27, "Male", "UX Designer"),
    array("Lê Ngọc Diệu", 31, "Female", "Project Manager"),
    array("Linda Davis", 26, "Female", "Software Engineer"),
    array("Michael Lee", 33, "Male", "Data Scientist"),
    array("Susan Brown", 29, "Female", "HR Specialist"),
    array("Phạm Thị Minh", 34, "Female", "Accountant"),
    array("Trần Thanh Hà", 38, "Male", "Operations Manager"),
    array("Lê Quốc Anh", 42, "Male", "Financial Analyst"),
    array("Nguyễn Hoàng Nam", 28, "Male", "Civil Engineer"),
    array("Hoàng Bảo Trâm", 27, "Female", "Journalist"),
    array("Vũ Nhật Linh", 31, "Female", "Architect"),
    array("Emma Wilson", 35, "Female", "Consultant"),
    array("Oliver Smith", 40, "Male", "Sales Manager"),
    array("Sophia Nguyen", 24, "Female", "Research Assistant"),
    array("Jacob Jones", 29, "Male", "Graphic Artist")
);

$languageData = array(
    array($user_emails[0], array("English", "Spanish")),
    array($user_emails[1], array("English", "French")),
    array($user_emails[2], array("Vietnamese", "English")),
    array($user_emails[3], array("English")),
    array($user_emails[4], array("Vietnamese")),
    array($user_emails[5], array("English", "German")),
    array($user_emails[6], array("Vietnamese", "Chinese")),
    array($user_emails[7], array("English", "Italian")),
    array($user_emails[8], array("English", "Korean")),
    array($user_emails[9], array("English")),
    array($user_emails[10], array("Vietnamese")),
    array($user_emails[11], array("Vietnamese", "Japanese")),
    array($user_emails[12], array("Vietnamese", "French")),
    array($user_emails[13], array("Vietnamese")),
    array($user_emails[14], array("Vietnamese", "English")),
    array($user_emails[15], array("Vietnamese")),
    array($user_emails[16], array("English", "Spanish")),
    array($user_emails[17], array("English")),
    array($user_emails[18], array("Vietnamese", "English")),
    array($user_emails[19], array("English", "Russian"))
);

$phoneData = array(
    array($user_emails[0], array("0912345678")),
    array($user_emails[1], array("0923456789")),
    array($user_emails[2], array("0934567890", "0987654321")),
    array($user_emails[3], array("0945678901")),
    array($user_emails[4], array("0956789012")),
    array($user_emails[5], array("0967890123", "0978901234")),
    array($user_emails[6], array("0978901234")),
    array($user_emails[7], array("0989012345")),
    array($user_emails[8], array("0990123456")),
    array($user_emails[9], array("0911234567")),
    array($user_emails[10], array("0912345601", "0912345602")),
    array($user_emails[11], array("0912345603")),
    array($user_emails[12], array("0912345604")),
    array($user_emails[13], array("0912345605", "0912345606")),
    array($user_emails[14], array("0912345607")),
    array($user_emails[15], array("0912345608")),
    array($user_emails[16], array("0912345609", "0912345610")),
    array($user_emails[17], array("0912345611")),
    array($user_emails[18], array("0912345612")),
    array($user_emails[19], array("0912345613", "0912345614"))
);

$degreeData = array(
    array($user_emails[0], array("Bachelor of Computer Science")),
    array($user_emails[1], array("Master of Business Administration", "Bachelor of Commerce")),
    array($user_emails[2], array("Bachelor of Engineering")),
    array($user_emails[3], array("Ph.D. in Physics")),
    array($user_emails[4], array("Bachelor of Arts in Psychology")),
    array($user_emails[5], array("Master of Science in Biology")),
    array($user_emails[6], array("Bachelor of Fine Arts")),
    array($user_emails[7], array("Ph.D. in Economics")),
    array($user_emails[8], array("Master of Music")),
    array($user_emails[9], array("Bachelor of Nursing")),
    array($user_emails[10], array("Bachelor of Law")),
    array($user_emails[11], array("Master of Computer Science")),
    array($user_emails[12], array("Bachelor of Architecture")),
    array($user_emails[13], array("Doctor of Medicine")),
    array($user_emails[14], array("Bachelor of Education", "Master of Education")),
    array($user_emails[15], array("Bachelor of Social Work")),
    array($user_emails[16], array("Bachelor of Science in Chemistry")),
    array($user_emails[17], array("Master of Public Health")),
    array($user_emails[18], array("Bachelor of Arts in English Literature")),
    array($user_emails[19], array("Master of Finance", "Bachelor of Economics"))
);
// Insert Users
$numUsers = count($userNames);

for ($i = 0; $i < $numUsers; $i++) {
    $name = $userNames[$i]; 
    $email = removeDiacritics($name) . "@gmail.com"; 
    $hashed_password = password_hash('123456', PASSWORD_DEFAULT);
    $user_level = "USER";

    $insertUser = "INSERT INTO users (email, `password`, user_level)
                   VALUES ('$email', '$hashed_password', '$user_level')";

    if ($conn->query($insertUser) === TRUE) {
        echo "User " . ($i + 1) . ": Data inserted into 'users' table successfully<br>";
    } else {
        echo "User " . ($i + 1) . ": Error inserting data into 'users' table: " . $conn->error . "<br>";
    }
}

// Insert Resumes
for ($i = 0; $i < count($user_emails); $i++) {
    $user_email = $user_emails[$i];
    $getUserIdQuery = "SELECT user_id FROM users WHERE email = '$user_email'";
    $result = $conn->query($getUserIdQuery);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $user_id = $row["user_id"];
        
        $resume = $resumeData[$i];
        $name = $resume[0];
        $age = $resume[1];
        $gender = $resume[2];
        $description = $resume[3];

        $insertResume = "INSERT INTO resumes (name, age, user_id, gender, description)
                        VALUES ('$name', $age, $user_id, '$gender', '$description')";

        if ($conn->query($insertResume) === TRUE) {
            echo "Data inserted into 'resumes' table for $user_email successfully<br>";
        } else {
            echo "Error inserting data into 'resumes' table for $user_email: " . $conn->error;
        }
    } else {
        echo "User not found with email: $user_email<br>";
    }
}

// Insert Languages
foreach ($languageData as $data) {
    $user_email = $data[0];
    $languages = $data[1];

    $getUserIdQuery = "SELECT user_id FROM users WHERE email = '$user_email'";
    $result = $conn->query($getUserIdQuery);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $user_id = $row["user_id"];

        foreach ($languages as $language) {
            $insertLanguage = "INSERT INTO languages (description, resume_id) VALUES ('$language', $user_id)";

            if ($conn->query($insertLanguage) === TRUE) {
                echo "Language '$language' inserted for $user_email successfully<br>";
            } else {
                echo "Error inserting language for $user_email: " . $conn->error . "<br>";
            }
        }
    } else {
        echo "User not found with email: $user_email<br>";
    }
}

// Insert Phones
foreach ($phoneData as $data) {
    $user_email = $data[0];
    $phone_numbers = $data[1];

    $getUserIdQuery = "SELECT user_id FROM users WHERE email = '$user_email'";
    $result = $conn->query($getUserIdQuery);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $user_id = $row["user_id"];

        foreach ($phone_numbers as $phone_number) {
            $insertPhone = "INSERT INTO phones (phone_number, resume_id) VALUES ('$phone_number', $user_id)";

            if ($conn->query($insertPhone) === TRUE) {
                echo "Phone number '$phone_number' inserted for $user_email successfully<br>";
            } else {
                echo "Error inserting phone number for $user_email: " . $conn->error . "<br>";
            }
        }
    } else {
        echo "User not found with email: $user_email<br>";
    }
}

// Insert Degrees
foreach ($degreeData as $data) {
    $user_email = $data[0];
    $degrees = $data[1];
    
    // Get user ID from the database
    $getUserIdQuery = "SELECT user_id FROM users WHERE email = '$user_email'";
    $result = $conn->query($getUserIdQuery);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $user_id = $row["user_id"];

        // Insert each degree for this user
        foreach ($degrees as $degree) {
            $insertDegree = "INSERT INTO degrees (description, resume_id) VALUES ('$degree', $user_id)";

            if ($conn->query($insertDegree) === TRUE) {
                echo "Degree '$degree' inserted for $user_email successfully<br>";
            } else {
                echo "Error inserting degree for $user_email: " . $conn->error . "<br>";
            }
        }
    } else {
        echo "User not found with email: $user_email<br>";
    }
}

$conn->close(); // Close the database connection at the end
?>