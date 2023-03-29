#!/usr/bin/perl
use warnings;
use strict;
print "Enter the base : ";
my $base = <STDIN>;
print "Enter the height : ";
my $height = <STDIN>;
my $area = 0.5 * $base * $height;
print "Area of right angled triangle : ".$area, "\n";
