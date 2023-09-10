sub findLcm {    
    my ($a, $b) = @_;    
    my $greater = $a > $b ? $a : $b;   
    my $lcm = $greater;    
    while (1) {        
        if ($lcm % $a == 0 && $lcm % $b == 0) {            
            return $lcm;        
            
        }        
        $lcm += $greater;    
    }
}

print "Enter the first number : ";
my $a = <STDIN>;
print "Enter the second number : ";
my $b = <STDIN>;
my $result = findLcm($a, $b);
print "LCM of $a and $b is $result\n";
