use strict;
use warnings;
use 5.010;
 
my @array = qw(1 2 3 4 5);
my @rev = reverse @array;
say join ' ', @rev;
