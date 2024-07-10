use strict;
use warnings;

sub cylindrical_rotate_90 {
    my ($matrix) = @_;

    my $num_rows = scalar @$matrix;
    my $num_cols = scalar @{$matrix->[0]};

    my @rotated_matrix;
    for my $i (0 .. $num_rows - 1) {
        for my $j (0 .. $num_cols - 1) {
            $rotated_matrix[$j][$num_rows - 1 - $i] = $matrix->[$i][$j];
        }
    }

    return \@rotated_matrix;
}

# Input matrix
my @input_matrix = (
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
);

# Perform cylindrical rotation
my $rotated_matrix_ref = cylindrical_rotate_90(\@input_matrix);

# Output the rotated matrix
for my $row (@$rotated_matrix_ref) {
    print join(" ", @$row), "\n";
}
