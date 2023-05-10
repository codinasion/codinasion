#!/usr/bin/perl
use warnings;
use strict;
print "Enter the fahrenheit : ";
my $fahrenheit = <STDIN>;
my $kelvin = ($fahrenheit - 32.0) * 0.56 + 273.15;
print $fahrenheit." fahrenheit is ".$kelvin." kelvin", "\n";
