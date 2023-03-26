print "Enter a number: ";
$n=<STDIN>;
$t=$n;
$f=1;
for($i=0;$i<$t;$i++)
{
$f=$f*$n;
$n=$n-1;
}
print "Factorial of given number :  $f\n";
