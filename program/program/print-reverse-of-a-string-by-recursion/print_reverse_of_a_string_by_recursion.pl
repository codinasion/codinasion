sub reverseString {
    my ($str) = @_;

    if (length($str) <= 1) {
        return $str;
    } else {
        return reverseString(substr($str, 1)) . substr($str, 0, 1);
    }
}

my $inputString = "abcd";
my $outputString = reverseString($inputString);

print "Input: $inputString\n";
print "Output: $outputString\n";
