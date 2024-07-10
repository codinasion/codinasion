use strict;
use warnings;

sub matrix_inverse {
    my ($matrix) = @_;

    my $size = scalar(@$matrix);

    # Check if the matrix is square
    die "Matrix must be square for inversion" if $size != scalar(@{$matrix->[0]});

    # Augment the matrix with an identity matrix
    my @augmented_matrix;
    for my $i (0..$size-1) {
        for my $j (0..$size-1) {
            $augmented_matrix[$i][$j] = $matrix->[$i][$j];
            $augmented_matrix[$i][$j+$size] = ($i == $j) ? 1 : 0;
        }
    }

    # Perform Gauss-Jordan elimination
    for my $i (0..$size-1) {
        my $pivot = $augmented_matrix[$i][$i];

        die "Matrix is singular, cannot find inverse" if $pivot == 0;

        for my $j (0..2*$size-1) {
            $augmented_matrix[$i][$j] /= $pivot;
        }

        for my $k (0..$size-1) {
            next if $k == $i;
            my $factor = $augmented_matrix[$k][$i];
            for my $j (0..2*$size-1) {
                $augmented_matrix[$k][$j] -= $factor * $augmented_matrix[$i][$j];
            }
        }
    }

    # Extract the inverse matrix from the augmented matrix
    my @inverse_matrix;
    for my $i (0..$size-1) {
        for my $j ($size..2*$size-1) {
            push @{$inverse_matrix[$i]}, $augmented_matrix[$i][$j];
        }
    }

    return @inverse_matrix;
}

# Example usage
my @matrix = (
    [4, 2, 7],
    [1, 5, 3],
    [8, 6, 9]
);

my @inverse_matrix = matrix_inverse(\@matrix);

# Print the inverse matrix
for my $i (0..$#inverse_matrix) {
    for my $j (0..$#{$inverse_matrix[$i]}) {
        printf "%.16f ", $inverse_matrix[$i][$j];
    }
    print "\n";
}

