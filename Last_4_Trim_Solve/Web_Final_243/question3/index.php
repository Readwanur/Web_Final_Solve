<?php

$conn = new mysqli("Localhost", "root", "", "uiuweb_final");

if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

//ANS-1
$sql1 = "SELECT LetterGrade, COUNT(StudentID) AS total_number
        FROM student_final
        GROUP BY LetterGrade;";

$store = $conn->query($sql1);

echo "ANS-1: <br><br>";
while($show = $store->fetch_assoc()){
    echo "Letter Grade: " . $show['LetterGrade'] . " - Total Students: " . $show['total_number'] . "<br>";
}
echo "<br><br>";

// ANS-2
$sql2 = "UPDATE student_final
        SET LetterGrade = 'C'
        WHERE Grade < 75 AND LetterGrade != 'D';";

$store = $conn->query($sql2);

//ANS-3
$sql3 = "UPDATE student_final
        SET Grade = Grade + 5
        WHERE Grade > 80 AND Grade+5 <= 90;";

$store = $conn->query($sql3);

//ANS-4
$sql4 = "SELECT CourseTitle, COUNT(StudentID) AS total_number_of_students
        FROM student_final
        GROUP BY CourseTitle
        ORDER BY total_number_of_students DESC;";   

$store = $conn->query($sql4);

echo "ANS-4: <br><br>";
while($show = $store->fetch_assoc()){
    echo "Course Title: " . $show['CourseTitle'] . " - Total Students: " . $show['total_number_of_students'] . "<br>";
}
echo "<br><br>";

?>