#!/usr/bin/perl
sub average {
my @array = @_; 
my $sum; 
foreach (@array) { $sum += $_; }
return $sum/@array; 
}

@dataArray = (1, 2, 3, 4, 5);
print average(@dataArray);
