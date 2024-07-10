#!/usr/bin/perl
use warnings;
use strict;

my $binary = 1010;
my $int = unpack("N", pack("B32", substr("0" x 32 . $binary, -32)));
my $hex = sprintf("%x", $int );
print uc($hex),"\n";
