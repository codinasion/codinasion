#!/usr/bin/perl
use strict;
use warnings;
my @array = sort { $a <=> $b } qw(10 20 30 40 50);
print "min: $array[0]\n";
