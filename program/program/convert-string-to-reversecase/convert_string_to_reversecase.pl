sub reverseCase {
    my ($str) = @_;
    

    $str =~ tr/a-zA-Z/A-Za-z/;
    
    return $str;
}


my $inputString = "hello world";
my $outputString = reverseCase($inputString);


print "Input: $inputString\n";
print "Output: $outputString\n";
