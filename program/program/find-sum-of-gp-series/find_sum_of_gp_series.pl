sub sum_of_gp {
    my ($a1, $r, $n) = @_;


    my $sum = $a1 * (int($r)**$n - 1) / ($r - 1);
    return $sum;
}


my $a1 = 2;
my $r = 3;
my $n = 3;


print "Sum of the GP series: ", sum_of_gp($a1, $r, $n), "\n";
