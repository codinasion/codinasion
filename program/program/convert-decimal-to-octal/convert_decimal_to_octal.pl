use strict;
use warnings;

print("Enter a decimal number: ");
my $decimal = <STDIN>;
chomp($decimal);

my $sign = ($decimal < 0) ? '-' : '';  # Check if the number is negative
$decimal = abs($decimal);  # Get the absolute value

my $octal = sprintf("%s%o", $sign, $decimal);
print("Octal Equivalent: $octal\n");
