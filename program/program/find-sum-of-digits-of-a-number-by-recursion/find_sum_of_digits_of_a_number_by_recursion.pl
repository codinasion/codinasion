#!/usr/bin/perl

use strict;
use warnings;

sub sum_of_digits {
    my $n = shift;
    if ($n == 0) {
        return 0;
    }
    else {
        my $last_digit = $n % 10;
        my $rest_of_number = int($n / 10);
        return $last_digit + sum_of_digits($rest_of_number);
    }
}

if (scalar @ARGV > 0) {
   my $n = shift @ARGV;
   my $sum = sum_of_digits($n);
   print "Input:   $n\nOutput:  $sum\n";
} else {
   die "ERROR: Missing input number\n";
}
