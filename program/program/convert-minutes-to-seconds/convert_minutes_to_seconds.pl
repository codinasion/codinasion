#!/usr/bin/perl
use warnings;
use strict;
print "Enter the minutes : ";
my $mins = <STDIN>;
my $seconds = $mins * 60;
print $mins." minutes are ".$seconds." seconds\n";
