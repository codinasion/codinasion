#!/usr/bin/perl
use v5.14;
use strict;
use warnings;
print "Enter a string : ";
my $str = lc(<STDIN>);
$str=~s/ /./g;
say $str;
