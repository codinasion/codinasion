sub large_and_small {   
    my (@numbers);
    @numbers = @_;

    my ($small, $large);
    $large = $numbers[0];
    $small = $numbers[0];

    foreach my $i (@numbers) {

        if ($i > $large) {         

            $large = $i;  
        }        
        elsif ($i < $small) {

            $small = $i;  
        }
    }
    return ($small, $large);
}


my (@my_array, @ret);
@my_array = (1,2,3,4,5);
@ret = large_and_small(@my_array);
print "Largest value : ", $ret[1], "\n";
print "Smallest value : ", $ret[0], "\n";
