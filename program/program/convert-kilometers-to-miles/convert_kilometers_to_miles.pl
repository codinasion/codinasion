#!/usr/bin/perl
use warnings;
use strict;
print "Enter the kilometer : ";
my $km = <STDIN>;
my $miles = $km / 1.609;
print $km." kilometers are ".$miles." miles\n";
