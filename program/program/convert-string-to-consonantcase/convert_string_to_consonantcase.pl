sub consonantcase {
    my ($input) = @_;
    my %vowels = ('a' => 1, 'e' => 1, 'i' => 1, 'o' => 1, 'u' => 1);
    my @chars = split('', $input);
    for my $char (@chars) {
        if (exists $vowels{lc($char)}) {
            print lc($char);
        } else {
            print uc($char);
        }
    }
    print "\n";
}

# Test with input "hello world"
consonantcase("hello world");
