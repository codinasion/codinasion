use strict;
use warnings;
use 5.010;

print "Please enter a number : ";
my $n = <STDIN>;
$n=~s/0+$//;
my $u = reverse $n;
print "Reverse of given number : ".$u;
