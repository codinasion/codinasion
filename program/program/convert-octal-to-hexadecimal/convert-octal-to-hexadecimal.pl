use strict;
use warnings;

# This gives value of char in decimal
sub NumberCharToValue {
    my ($ch, $base) = @_;

    if ($ch ge '0' && $ch le '9') {
        return ord($ch) - ord('0');
    }
    # next will be A, B, C...
    return ord($ch) - ord('A') + 10;
}

# This gives char of value in decimal
sub NumberValueToChar {
    my ($num, $base) = @_;

    if ($num <= 9) {
        return chr(ord('0') + $num);
    }
    # num will be 10, 11, 12 ...
    return chr(ord('A') + $num - 10);
}

# Idea is to convert input to decimal, then from decimal to output
sub convertNumberSystem {
    my ($input, $fromBase, $toBase) = @_;

    # Convert input to decimal
    my $inputLength = length($input);
    my $decimal = 0;
    my $digitPower = 1;

    for (my $i = $inputLength - 1; $i >= 0; $i--) {
        $decimal += NumberCharToValue(substr($input, $i, 1), $fromBase) * $digitPower;
        $digitPower *= $fromBase;
    }

    # Convert decimal to output
    my $output = "";
    while ($decimal != 0) {
        $output = NumberValueToChar($decimal % $toBase, $toBase) . $output;
        $decimal = int($decimal / $toBase);
    }

    return $output;
}

print "Enter the input: ";
chomp(my $input = <STDIN>);

# This function can convert a number from any base to another base
my $output = convertNumberSystem($input, 8, 16);

print "Output: $output\n";
