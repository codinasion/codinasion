use strict;
use warnings;

sub jump_search {
    my ($arr_ref, $x) = @_;

    my $n = scalar(@$arr_ref);
    my $block_size = int(sqrt($n));
    my $prev = 0;

    # Finding the block where the element may present
    while ($arr_ref->[$block_size - 1] < $x) {
        $prev = $block_size;
        $block_size += int(sqrt($n));
        return -1 if $prev >= $n; # Not found
    }

    # Doing linear search in the identified block
    while ($arr_ref->[$prev] < $x) {
        $prev++;
        return -1 if $prev == min($block_size, $n); # Not found
    }

    # If element is found
    return $prev if $arr_ref->[$prev] == $x;
    
    return -1; # Not found
}

# Helper function to get the minimum of two numbers
sub min {
    my ($a, $b) = @_;
    return $a < $b ? $a : $b;
}

# Example usage
my @arr = (1, 3, 5, 7, 9, 11, 13, 15, 17, 19);
my $x = 13;
my $index = jump_search(\@arr, $x);

if ($index != -1) {
    print "Element $x found at index $index.\n";
} else {
    print "Element $x not found in the array.\n";
}
