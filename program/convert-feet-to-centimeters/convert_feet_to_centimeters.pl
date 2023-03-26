#!/usr/bin/perl
use warnings;
use strict;
print "Enter the feet : ";
my $feet = <STDIN>;
my $centimeter = $feet * 30.48 ;
print $feet." feet is ".$centimeter." centimeters", "\n";
