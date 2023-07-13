<?php
$host = 'npcdev:asia-southeast1:food'; // Replace with your database host
$dbName = 'food'; // Replace with your database name
$user = 'root'; // Replace with your database username
$pass = 'ss'; // Replace with your database password

// Establish a connection to the database
$dsn = "mysql:host=$host;dbname=$dbName;charset=utf8mb4";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_EMULATE_PREPARES => false,
];
try {
    $pdo = new PDO($dsn, $user, $pass, $options);
    $sql = "CREATE TABLE food (
        id INT AUTO_INCREMENT PRIMARY KEY,
        menu-item VARCHAR(255),
        price DECIMAL(10, 2)
      );
        )";
    $sql = "INSERT INTO food (menu-item, price)
            VALUES ('Egg Rice', '40')";

 $conn->exec($sql);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
