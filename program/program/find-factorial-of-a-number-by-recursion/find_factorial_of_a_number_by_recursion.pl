sub factorial
{
my $n = $_[0];
if ($n == 0 || $n == 1)
{
    return 1;
}
else
{
    return $n * factorial($n - 1);
}
}
$n = 5;

print "Factorial of a number $n is ", factorial($n);
