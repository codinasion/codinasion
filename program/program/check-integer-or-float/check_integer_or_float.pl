print "Enter a number: ";
my $input = <STDIN>;
print "\nGiven number is Integer\n" if ($input =~/^-?\d+$/); 
print "\nGiven number is Float\n" if ($input =~/^-?\d*\.\d+$/);
