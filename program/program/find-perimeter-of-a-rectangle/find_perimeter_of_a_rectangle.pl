#!/usr/bin/perl
use warnings;
use strict;
print "Enter the length : ";
my $length = <STDIN>;
print "Enter the width : ";
my $width = <STDIN>;
my $result = 2 * ($length+$width);
print "Perimeter of rectangle : ".$result. "\n";
