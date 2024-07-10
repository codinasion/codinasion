sub maxSubArray {
    my @arr = @_;
    my $n = scalar(@arr);
    my $max_so_far = $arr[0];
    my $max_ending_here = $arr[0];

    for (my $i = 1; $i < $n; $i++) {
        $max_ending_here = max($arr[$i], $max_ending_here + $arr[$i]);
        $max_so_far = max($max_so_far, $max_ending_here);
    }

    return $max_so_far;
}

# Helper function to find the maximum of two numbers
sub max {
    my ($a, $b) = @_;
    return ($a > $b) ? $a : $b;
}

# Main program
my @arr = (-2, -3, 4, -1, -2, 1, 5, -3);
my $n = scalar(@arr);
my $max_sum = maxSubArray(@arr);
print "Maximum subarray sum is $max_sum\n";
