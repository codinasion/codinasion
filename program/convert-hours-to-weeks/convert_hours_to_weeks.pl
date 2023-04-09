#!/usr/bin/perl
use warnings;
use strict;
print "Enter the hours : ";
my $hours = <STDIN>;
my $weeks = $hours / 168;
print $hours." hours is ".$weeks." weeks", "\n";
