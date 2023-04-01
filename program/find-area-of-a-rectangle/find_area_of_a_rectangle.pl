#!/usr/bin/perl
use warnings;
use strict;
print "Enter the length : ";
my $length = <STDIN>;
print "Enter the width : ";
my $width = <STDIN>;
my $area = $length * $width;
print "Area of rectangle : ".$area, "\n";
