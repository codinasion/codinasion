sub average_of_digits {
    my ($num) = @_;

    if ($num < 10) {
        return $num;
    } else {
        my $last_digit = $num % 10;
        my $rest_of_digits = int($num / 10);
        return ($last_digit + average_of_digits($rest_of_digits));
    }
}

my $number = 455;
my $result = average_of_digits($number);

print "Average of digits of $number is $result\n";
