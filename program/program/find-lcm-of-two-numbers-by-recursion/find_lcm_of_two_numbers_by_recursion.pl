#!/usr/bin/perl -w
use strict;
 
sub gcd {
  my ($m, $n) = @_;
  if ($n == 0) {
    return $m;
  }
 
  return gcd($n, $m % $n);
}

sub lcm {
  my ($x, $y) = @_;
  return ($x / gcd($x, $y)) * $y;
}

print lcm(12, 18);
