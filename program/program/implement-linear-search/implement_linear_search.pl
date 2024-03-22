#!/usr/bin/perl

use strict;
use warnings;

sub linear_search {
    my ($list_ref, $value) = @_;
    my @list = @$list_ref;

    for my $i (0 .. $#list) {
        if ($list[$i] == $value) {
            return $i;
        }
    }

    return -1; # Not found
}

# Input the list from the user
print "Enter numbers separated by spaces: ";
my $input = <STDIN>;
chomp($input);
my @list = split(/\s+/, $input);

# Input the value to search for
print "Enter the value to search for: ";
my $value = <STDIN>;
chomp($value);

my $index = linear_search(\@list, $value);

if ($index != -1) {
    print "Output: $index\n";
} else {
    print "Value not found in the list.\n";
}
