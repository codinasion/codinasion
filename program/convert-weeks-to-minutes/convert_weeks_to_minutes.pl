#!/usr/bin/perl
use warnings;
use strict;
print "Enter the weeks : ";
my $weeks = <STDIN>;
my $minutes = $weeks * 10080;
print $weeks." weeks is ".$minutes." minutes", "\n";
