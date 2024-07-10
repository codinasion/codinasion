my $array = [1, 2, 3, 4, 5];
my $iter_sum = 0;
for my $each (@$array) {
    $iter_sum += $each;
}
print $iter_sum;
