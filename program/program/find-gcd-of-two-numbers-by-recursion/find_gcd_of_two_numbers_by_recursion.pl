sub gcd {
    my ($a, $b) = @_;

    # Base case: if one of the numbers is zero, the other number is the GCD
    return $b == 0 ? $a : gcd($b, $a % $b);
}

# Example usage
my $num1 = 12;
my $num2 = 18;

my $result = gcd($num1, $num2);
print "The GCD of $num1 and $num2 is: $result\n";
