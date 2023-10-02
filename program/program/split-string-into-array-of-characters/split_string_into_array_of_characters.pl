#!/usr/bin/perl
use warnings;
use strict;
print "Enter a word : ";
my $word = <STDIN>;
my @arr=split (//, $word);
print "@arr";
