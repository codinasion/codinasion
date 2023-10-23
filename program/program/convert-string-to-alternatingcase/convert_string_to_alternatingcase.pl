#!/usr/bin/perl 
use strict; 
use warnings; 
  
my $str = 'hello world'; 
my @spl = split('', $str); 
my $index = 0;
foreach my $i (@spl)  
{   
    if ($index%2==0) {
    print lc("$i");
    } else{
    print uc("$i");
    }
    $index++;
} 
