#!/usr/bin/perl
use warnings;
use strict;
print "Enter the radius : ";
my $radius = <STDIN>;
my $area = 4 * 3.14  * $radius * $radius ;
print "Surface area of sphere : ".$area, "\n";
