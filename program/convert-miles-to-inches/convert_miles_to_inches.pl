#!/usr/bin/perl
use warnings;
use strict;
print "Enter the miles : ";
my $miles = <STDIN>;
my $inches = $miles * 63360;
print $miles." miles is ".$inches." inches", "\n";
