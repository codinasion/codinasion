sub find_trace {
    my ($matrix) = @_;
    my $trace = 0;
    my $size = scalar(@$matrix);
    for (my $i = 0; $i < $size; $i++) {
        $trace += $matrix->[$i][$i];
    }
    return $trace;
}

# Function to create a matrix from user input
sub create_matrix {
    print "Enter the size of the square matrix: ";
    my $size = <STDIN>;
    chomp($size);
    
    my @matrix;
    for (my $i = 0; $i < $size; $i++) {
        print "Enter row ", $i + 1, " elements separated by space: ";
        my $row_input = <STDIN>;
        chomp($row_input);
        my @row = split(/\s+/, $row_input);
        push @matrix, \@row;
    }
    return \@matrix;
}

# Create matrix
my $matrix = create_matrix();

# Calculate trace
my $trace = find_trace($matrix);
print "Trace of the matrix is: $trace\n";
