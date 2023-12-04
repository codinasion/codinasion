print "Enter a number : ";
my $n=<STDIN>;
print "\n"; 
sub printNos{
    my ($input) = @_;
        if($input > 0)
        {
            print $input + " ";
            printNos($input - 1);
        }
        return;
}
    
printNos($n);
