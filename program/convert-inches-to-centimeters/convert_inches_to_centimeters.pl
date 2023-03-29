print "Enter the inches  : ";
my $inches = <STDIN> ;
my $res = inchesToCentimetres();
print "Equivalent Centimetres : $res";

sub inchesToCentimetres
{

    my ($x) = @_;

    my $res = $inches * 2.54;

    return $res ;   

}
