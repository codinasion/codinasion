#!/usr/bin/perl
use warnings;
use strict;
print "Enter the inches : ";
my $inches = <STDIN>;
my $centimeters = $inches / 2.54;
print $inches." inches are ".$centimeters." centimeters\n";
