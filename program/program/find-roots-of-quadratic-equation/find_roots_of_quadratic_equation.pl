#!/usr/bin/perl

use strict;
use warnings;

# Default coefficients
my $a = 1;
my $b = 3;
my $c = 1;

my $discriminant = ($b**2) - (4 * $a * $c);

if ($discriminant >= 0) {
    my $root1 = (-$b + sqrt($discriminant)) / (2 * $a);
    my $root2 = (-$b - sqrt($discriminant)) / (2 * $a);
    if ($discriminant > 0) {
        print "$root1, $root2";
    } else {
        print "$root1, $root2";
    }
} else {
    print "No real roots exist\n";
}
