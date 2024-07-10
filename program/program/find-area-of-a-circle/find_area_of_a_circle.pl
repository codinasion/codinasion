#!/usr/bin/perl
use warnings;
use strict;
print "Enter the radius : ";
my $radius = <STDIN>;
my $area =  3.14 * $radius * $radius;
print "Area of circle : ".$area, "\n";
