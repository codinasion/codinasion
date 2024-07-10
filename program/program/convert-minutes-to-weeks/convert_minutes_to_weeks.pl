#!/usr/bin/perl
use warnings;
use strict;
print "Enter the minutes : ";
my $minutes = <STDIN>;
my $weeks = $minutes / 10080;
print $minutes." minutes is ".$weeks." weeks", "\n";
