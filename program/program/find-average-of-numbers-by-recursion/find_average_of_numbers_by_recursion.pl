#!/usr/bin/perl

use strict;
use warnings;

sub calc_average {
    my ($numbers_ref, $start_index, $end_index) = @_;
    if ($start_index > $end_index) {
        return 0;
    }
    
    elsif ($start_index == $end_index) {
        return $numbers_ref->[$start_index];
    }
   
    else {
        my $mid_index = int(($start_index + $end_index) / 2);
        my $left_average = calc_average($numbers_ref, $start_index, $mid_index);
        my $right_average = calc_average($numbers_ref, $mid_index+1, $end_index);
        my $total_sum = $left_average + $right_average;
        my $average_value = int($total_sum / 2);
        return $average_value;
    }
}

my @numbers = (1, 2, 3, 4, 5);
my $average_value = calc_average(\@numbers, 0, $#numbers);
print "The average value is $average_value\n";
