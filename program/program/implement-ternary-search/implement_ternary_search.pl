use strict;
use warnings;

sub ternary_search {
    my ($array_ref, $value) = @_;
    my @array = @$array_ref;
    my $left = 0;
    my $right = scalar(@array) - 1;
    
    while ($left <= $right) {
        my $partition_size = int(($right - $left) / 3);
        my $mid1 = $left + $partition_size;
        my $mid2 = $right - $partition_size;
        
        if ($array[$mid1] == $value) {
            return $mid1;
        }
        
        if ($array[$mid2] == $value) {
            return $mid2;
        }
        
        if ($value < $array[$mid1]) {
            $right = $mid1 - 1;
        } elsif ($value > $array[$mid2]) {
            $left = $mid2 + 1;
        } else {
            $left = $mid1 + 1;
            $right = $mid2 - 1;
        }
    }
    
    return -1;
}

# Example usage
my @sorted_array = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
my $value_to_search = 7;

my $result = ternary_search(\@sorted_array, $value_to_search);

if ($result != -1) {
    print "Element found at index $result\n";
} else {
    print "Element not found in the array\n";
}
