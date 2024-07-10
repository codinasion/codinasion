#!/usr/bin/perl
use warnings;
use strict;
print "Enter the length : ";
my $length = <STDIN>;
print "Enter the width : ";
my $width = <STDIN>;
print "Enter the height : ";
my $height = <STDIN>;
my $cuboid = 2 * ($length * $width) + ($length * $height) + ($width * $height);
print "Area of Cuboid: ".$cuboid, "\n";
