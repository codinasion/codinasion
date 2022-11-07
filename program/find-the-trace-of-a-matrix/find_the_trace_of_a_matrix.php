//To find Trace of the given matrix
<html>
<head>
<title>PHP Program To find Trace of the given matrix</title>
</head>
<body>
<?php
// Elements of matrix a
$a = array
(
array(1, 2, 3),
array(4, 5, 6),
array(7, 8, 9)
);
$n = count($a);
$sum = 0;
//Initially sum declare with 0;
echo("Original matrix is: </br>");
// To print Original matrix
for($i = 0; $i < $n; $i++)
{
for($j = 0; $j < $n; $j++)
{
echo ($a[$i][$j] . " " );
}
echo("<br>");
}
//Calculates trace of given matrix
for($i = 0; $i < $n; $i++)
{
$sum = $sum + $a[$i][$i];
// To add diagonal elements a[0][0],a[1]a[1]
}
echo "Trace of the given matrix is: ".$sum;
?>
</body>
</html>
