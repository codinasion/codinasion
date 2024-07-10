#!/usr/bin/perl
use warnings;
use strict;
print "Enter the centimeter : ";
my $cm = <STDIN>;
my $feet = $cm / 30.48;
print $cm." centimeters are ".$feet." feet\n";
