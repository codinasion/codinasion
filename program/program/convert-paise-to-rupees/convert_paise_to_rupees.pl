#!/usr/bin/perl
use warnings;
use strict;
print "Enter the paise : ";
my $paise = <STDIN>;
my $rupees = $paise / 100;
print $paise." paise are ".$rupees." rupees\n";
