print "Enter an integer: ";
$n=<STDIN>;
$f1=0;
$f2=1;
print "Fibonacci series of given input :\n";
if($n==1)
{
print "0\n";
}
elsif($n==2)
{
print "0\n1\n";
}
elsif($n>2)
{
print "0\n1\n";
$f3=$f1+$f2;
print "$f3\n";
for($i=2;$i<$n;$i++)
{
$f1=$f2;
$f2=$f3;
$f3=$f1+$f2;
print "$f3\n";
}
}
