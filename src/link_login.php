<?php
session_start();

// Database configuration
$servername = "localhost"; // Change this if your MySQL server is running on a different host
$username = "root"; // Change this if your MySQL username is different
$password = ""; // Change this if your MySQL password is different
$database = "db_vams"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = "SELECT * FROM user WHERE email='$email'";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        // Check if password matches
        if ($password == $row['password']) {
            $_SESSION['user_id'] = $row['id'];
            header("Location: dashboard.html");
            exit();
        } else {
            // Wrong password
            header("Location: login.php?error=wrong_password");
            exit();
        }
    } else {
        // Account doesn't exist
        header("Location: login.php?error=account_not_exist");
        exit();
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Error</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100 flex items-center justify-center h-screen">
    <div class="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-center">Login Error</h2>
        <div class="text-red-500 mb-4">
            <svg class="w-6 h-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938-4.745a4.5 4.5 0 015.878-5.878l.488.488a1.5 1.5 0 002.122 2.122l.488.488a4.5 4.5 0 01-5.878 5.878l-.488-.488a1.5 1.5 0 00-2.122-2.122l-.488-.488z" />
            </svg>
            <span id="errorMessage"></span>
        </div>
        <a href="#" class="block text-center text-blue-500 hover:underline">Go back to login</a>
    </div>
    <!-- <script>
        // JavaScript to set error message dynamically
        const urlParams = new URLSearchParams(window.location.search);
        const errorType = urlParams.get('error');

        if (errorType === 'accountNotExist') {
            document.getElementById('errorMessage').textContent = 'Account doesn\'t exist.';
        } else if (errorType === 'wrongPassword') {
            document.getElementById('errorMessage').textContent = 'Wrong password.';
        }
    </script> -->
</body>

</html>
