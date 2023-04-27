#!/usr/bin/perl
use warnings;
use strict;
print "Enter the miles : ";
my $miles = <STDIN>;
my $meter = $miles * 1609;
print "Equivalent meters : ".$meter, "\n";
