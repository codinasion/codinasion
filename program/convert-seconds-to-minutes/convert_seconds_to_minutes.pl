#!/usr/bin/perl
use warnings;
use strict;
print "Enter the seconds : ";
my $seconds = <STDIN>;
my $minutes =  $seconds / 60;
print $seconds." seconds is ".$minutes." minutes", "\n";
