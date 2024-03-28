# Perl program to print pattern 1

# Function to print pattern
sub print_pattern {
    my $num = shift;

    # Loop to iterate through each row
    for my $i (1..$num) {
        # Loop to print numbers in each row
        for my $j (1..$i) {
            print "$j ";
        }
        print "\n";
    }
}

# Main program
print "Enter the number of rows: ";
my $input = <STDIN>;
chomp($input);

# Check if input is a positive integer
if ($input =~ /^\d+$/ && $input > 0) {
    print_pattern($input);
} else {
    print "Invalid input. Please enter a positive integer.\n";
}
