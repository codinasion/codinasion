#!/usr/bin/perl
use strict;
use warnings;

# Function to print numbers from 1 to n without loop
sub print_numbers {
    my ($n) = @_;

    # Base case
    if ($n == 0) {
        return;
    }

    # Recursive call
    print_numbers($n - 1);

    # Print the current number
    print "$n ";
}

# Main Program
print "Enter a number: ";
my $num = <STDIN>;
chomp $num;

# Error handling for invalid input
if ($num !~ /^\d+$/ || $num < 1) {
    print "Please enter a positive integer.\n";
} else {
    print_numbers($num);
    print "\n";
}
