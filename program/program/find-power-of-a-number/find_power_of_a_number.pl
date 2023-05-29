#!/usr/bin/perl
use warnings;
use strict;
print "Enter a number : ";
my $number = <STDIN>;
print "Enter the power : ";
my $power = <STDIN>;
print $number**$power, "\n";
