#!/usr/bin/perl
use warnings;
use strict;
print "Enter the hours : ";
my $hours = <STDIN>;
my $seconds = $hours * 3600;
print $hours." hours is ".$seconds." seconds", "\n";
