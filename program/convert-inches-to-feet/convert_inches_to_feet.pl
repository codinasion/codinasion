print "Enter the inch value : ";
my $inch = <STDIN> ;

my $res = inches2Feet($inch);
print "Feet conversion for the given inch : $res feet";

sub inches2Feet
{
    my ($x) = @_;
    my $res = $x / 12;
    return $res ;   
}
