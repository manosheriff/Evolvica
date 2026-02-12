<?php
header("Content-Type: application/json");

$conn = new mysqli(
    "localhost",
    "u307219115_evolvica",
    "Evolvica_04",
    "u307219115_Evolvica_DB"
);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed"]));
}

$result = $conn->query("SHOW TABLES");

$tables = [];
while ($row = $result->fetch_array()) {
    $tables[] = $row[0];
}

echo json_encode($tables);
?>
