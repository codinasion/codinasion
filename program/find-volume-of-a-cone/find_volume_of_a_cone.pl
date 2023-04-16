#!/usr/bin/perl
use warnings;
use strict;
print "Enter the radius : ";
my $radius = <STDIN>;
print "Enter the height : ";
my $height = <STDIN>;
my $cone = 1/3 * 3.14 * $radius * $radius * $height;
print "Volume of cone: ".$cone, "\n";
