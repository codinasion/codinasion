$number = 153;
$temp 	= $number;
$sum 	= 0;

while($temp != 0)
{
	$rem  = $temp % 10;
	$sum  = $sum + ($rem * $rem * $rem);
	$temp = $temp / 10;
}

if($number == $sum)
{
	print "Armstrong Number";
}
else
{
	print "Not an Armstrong Number";
}
