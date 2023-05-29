#!/usr/bin/perl
use warnings;
use strict;
print "Enter the pounds : ";
my $pounds = <STDIN>;
my $kg = $pounds * 0.453592;
print "Equivalent Kilogram : ".$kg, "\n";
