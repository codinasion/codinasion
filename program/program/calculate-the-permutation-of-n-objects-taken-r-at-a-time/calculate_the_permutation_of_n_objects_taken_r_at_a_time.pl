use strict;
use warnings;

sub calcPermutation {
    my ($n, $r) = @_;
    return calcFactorial($n) / calcFactorial($n - $r);
}

sub calcFactorial {
    my ($n) = @_;
    if ($n == 1) {
        return $n;
    } else {
        return $n * calcFactorial($n - 1);
    }
}

print "Please enter 2 numbers n and r: ";
my ($n, $r) = split / /, <STDIN>;

if ($n >= $r) {
    my $permutation = calcPermutation($n, $r);
    print $permutation;
} else {
    print "Invalid input: n must be greater than or equal to r\n";
}

