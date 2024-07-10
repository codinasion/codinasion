#!/usr/bin/perl

use strict;
use warnings;

print "Enter the radius of the cylinder: ";
my $radius = <STDIN>;
chomp $radius;

print "Enter the height of the cylinder: ";
my $height = <STDIN>;
chomp $height;

my $surface_area = 2 * 3.14159 * $radius * $height + 2 * 3.14159 * $radius * $radius;

print "The surface area of the cylinder is: $surface_area\n";
