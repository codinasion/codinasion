print "Enter a number: ";
my $num = <STDIN> ;

my $res = sumOfNaturalNumber($num);
print "Sum of natural number : $res";

sub sumOfNaturalNumber
{
    my ($x) = @_;
    my $res = $num * ($num+1)/2;
    return $res ;   
}
