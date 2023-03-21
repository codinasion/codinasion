#!/usr/bin/perl
use warnings;
use strict;
print "Enter the metre : ";
my $metre = <STDIN>;
my $miles = $metre/1609;
print "Equivalent Miles : ".$miles, "\n";
