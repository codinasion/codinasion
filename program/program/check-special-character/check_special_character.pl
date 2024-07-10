print "Please enter a character: ";
my $char = <STDIN>;
chomp $char;

if ($char =~ /[^a-zA-Z0-9]/) {
    print "Special Character\n";
} else {
    print "Not a Special Character\n";
}
