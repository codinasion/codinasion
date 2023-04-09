sub reverse_number {
    my $num = shift;
    if ($num < 10) {
        return $num;
    }
    else {
        my $last_digit = $num % 10;
        my $remaining_num = int($num / 10);
        return $last_digit . reverse_number($remaining_num);
    }
}

# Prompt the user to enter a number
print "Enter a number: ";
my $num = <STDIN>;
chomp $num;

# Print the reverse of the number
my $reverse_num = reverse_number($num);
print "Reverse of $num is $reverse_num\n";
