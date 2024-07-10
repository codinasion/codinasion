#!/usr/bin/perl
use strict;
use warnings;

sub selection_sort {
    my @list = @_;
    my $n = scalar @list;

    for my $i (0 .. $n - 2) {
        # Set current element as minimum
        my $min = $i;

        # Check the element to be minimum
        for my $j ($i + 1 .. $n - 1) {
            if ($list[$j] < $list[$min]) {
                $min = $j;
            }
        }

        # Swap the minimum element with the current element
        if ($min != $i) {
            my $temp = $list[$i];
            $list[$i] = $list[$min];
            $list[$min] = $temp;
        }
    }

    return @list;
}

# Example usage
my @unsorted_list = (64, 25, 12, 22, 11);
my @sorted_list = selection_sort(@unsorted_list);
print "Sorted list: @sorted_list\n";
