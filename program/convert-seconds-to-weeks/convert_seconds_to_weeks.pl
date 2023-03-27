#!/usr/bin/perl
use warnings;
use strict;
print "Enter the seconds : ";
my $seconds = <STDIN>;
my $weeks = $seconds / 604800;
print $seconds." seconds is ".$weeks." weeks", "\n";
