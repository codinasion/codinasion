sub binary_search {
    my ($arr, $value) = @_;
    my $low = 0;
    my $high = scalar(@$arr) - 1;

    while ($low <= $high) {
        my $mid = int(($low + $high) / 2);
        if ($arr->[$mid] == $value) {
            return $mid;  # Found the value
        } elsif ($arr->[$mid] < $value) {
            $low = $mid + 1;  # Value is in the upper half
        } else {
            $high = $mid - 1;  # Value is in the lower half
        }
    }

    return -1;  # Value not found
}

my @list = (1, 2, 3, 4, 5);
my $value = 4;
my $index = binary_search(\@list, $value);
if ($index != -1) {
    print "Output: $index\n";
} else {
    print "Value not found\n";
}
