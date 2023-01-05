print "Enter the radius: ";
my $radius = <STDIN> ;

print "Enter the height: ";
my $height = <STDIN> ;

my $res = volumeOfCylinder($radius, $height);
printf("Volume of Cylinder: %.3f", $res);

sub volumeOfCylinder
{
    my ($x) = @_;
    my $res = 3.1415926535 * $radius * 2 * $height;
    return $res ;   
}
