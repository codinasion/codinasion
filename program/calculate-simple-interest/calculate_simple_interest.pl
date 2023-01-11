print "Enter the principal: ";
my $principal = <STDIN> ;

print "Enter the rate of interest: ";
my $interest = <STDIN> ;

print "Enter the time: ";
my $time = <STDIN> ;

my $res = simpleInterest($principal, $interest);
print "Simple Interest : $res";

sub simpleInterest
{
    my ($x) = @_;
    my $res = ($principal * $interest * $time) / 100;
    return $res ;   
}
