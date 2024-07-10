#!/usr/bin/perl
use warnings;
use strict;
print "Enter the miles : ";
my $miles = <STDIN>;
my $feet =  $miles * 5280;
print $miles." miles is ".$feet." feet", "\n";
