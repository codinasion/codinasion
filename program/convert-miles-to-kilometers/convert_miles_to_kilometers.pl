#!/usr/bin/perl
use warnings;
use strict;
print "Enter the miles : ";
my $miles = <STDIN>;
my $km = $miles * 1.609;
print $miles." miles is ".$km." kilometers", "\n";
