use strict;
use warnings;

sub addNumbers {
    my ($n) = @_;
    return ($n != 0) ? ($n * $n * $n + addNumbers($n - 1)) : $n;
}

print "Enter a positive integer: ";
my $num = <STDIN>;
chomp($num);

print "Sum = ", addNumbers($num), "\n";
