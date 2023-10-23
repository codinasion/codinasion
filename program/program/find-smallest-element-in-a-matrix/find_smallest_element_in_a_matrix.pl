#!/usr/bin/perl
use strict;
use warnings;
use List::Util qw(min max);
my @items = ( [4, 7, 3],
              [9, 4, 2],
              [0, 6, 4] );

my @min_array = ();
push (@min_array, min(@{$items[0]}));
push (@min_array, min(@{$items[1]}));
push (@min_array, min(@{$items[2]}));
print min(@min_array), "\n";
