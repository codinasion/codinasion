#!/usr/bin/perl
use warnings;
use strict;
print "Enter the principal amount : ";
my $principal = <STDIN>;
print "Enter the rate of interest : ";
my $interest = <STDIN>;
print "Enter the time : ";
my $time = <STDIN>;
my $compoundInterest = $principal  * ((1 + $interest) ** $time);
print "Compound Interest :".$compoundInterest, "\n";
