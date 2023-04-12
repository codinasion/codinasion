#!/usr/bin/perl
use warnings;
use strict;
print "Enter the inches : ";
my $inches = <STDIN>;
my $miles = $inches/63360;
print $inches." inches is ".$miles." miles", "\n";
