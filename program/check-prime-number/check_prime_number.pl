use warnings;
use strict;
sub checkprime
{
my $m = shift @_;
my $i = 2;
while ($i < $m)
{
return 0 unless ($m % $i++);
}
return 1;
}
print "Enter a number : \n";
chomp (my $n = <STDIN>);
my $FindPrime = checkprime $n;
if ( $FindPrime == 1)
{
print "It's a Prime number \n";
}
else
{
print "It's not a Prime number \n";
}
