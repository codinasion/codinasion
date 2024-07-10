print "Enter the feet  : ";
my $feet = <STDIN> ;

my $res = feetToMiles();
print "Equivalent Miles : $res";

sub feetToMiles
{
    my ($x) = @_;
    my $res = $feet / 5280;
    return $res ;   
}
