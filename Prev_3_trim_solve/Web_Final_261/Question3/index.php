<?php

$conn = new mysqli("Localhost", "root", "", "uiu_bookshop");

if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

//ANS-1
$sql = "SELECT BookTitle,Price
        FROM book_info
        WHERE Category = 'Programming'
        ORDER BY Price DESC;";
$store = $conn->query($sql);

echo "ANSWER-1: <br><br>";
while($show = $store->fetch_assoc()){
    echo $show["BookTitle"] . "->" . $show["Price"] . "<br>";
}
echo "<br>";

//ANS-2
$sql2 = "SELECT BookTitle, Author, Price
        FROM book_info
        WHERE Price > 400 AND Category = 'Programming';";

$store = $conn->query($sql2);

echo "ANSWER-2: <br><br>";
while($show = $store->fetch_assoc()){
    echo $show["BookTitle"] . "->" . $show["Author"] . "->" . $show["Price"] . "<br>";
}
echo "<br>";

//ANS-3
$sql3 = "SELECT Category, COUNT(BookID) AS total_books
        FROM book_info
        GROUP BY Category;";
$store = $conn->query($sql3);

echo "ANSWER-3: <br><br>";
while($show = $store->fetch_assoc()){
    echo $show["Category"] . "->" . $show["total_books"] . "<br>";
}
echo "<br>";

//ANS-4
$sql4 = "SELECT Price AS p,Stock AS s
        FROM book_info;";
$store = $conn->query($sql4);
$net_worth = 0;
echo "ANSWER-4: <br><br>";
while($show = $store->fetch_assoc()){
    $net_worth += ($show["p"] * $show["s"]);
}
echo "Net Worth: " . $net_worth;
echo "<br><br>";

//ANS-5
$sql5 = "UPDATE book_info
        SET Price = Price - (Price * 0.1)
        WHERE Category = 'Language';";
$store = $conn->query($sql5);
$sql6 = "SELECT BookTitle, Price
        FROM book_info
        WHERE Category = 'Language';";
$store2 = $conn->query($sql6);

echo "ANSWER-5: <br><br>";
while($show = $store2->fetch_assoc()){
    echo $show["BookTitle"] . "->" . $show["Price"] . "<br>";
}
echo "<br>";


?>