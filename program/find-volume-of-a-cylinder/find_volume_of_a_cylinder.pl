print "Enter the radius: ";
my $radius = <STDIN> ;

print "Enter the height: ";
my $height = <STDIN> ;

my $res = volumeOfCylinder($radius, $height);
print "Volume of Cylinder : $res";

sub volumeOfCylinder
{
    my ($x) = @_;
    my $res = 3.14 * $radius * 2 * $height;
    return $res ;   
}
