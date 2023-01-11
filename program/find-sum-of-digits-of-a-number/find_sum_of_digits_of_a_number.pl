print"Enter a number: ";
$n=<STDIN>;
$s=0;
while($n>0)
{
$s=$s+($n%10);
$n=$n/10;
}
print"Sum is $s\n";
