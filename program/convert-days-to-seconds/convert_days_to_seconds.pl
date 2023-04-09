#!/usr/bin/perl
use warnings;
use strict;
print "Enter the days : ";
my $days = <STDIN>;
my $seconds = $days * 86400;
print $days." days are ".$seconds." seconds\n";
