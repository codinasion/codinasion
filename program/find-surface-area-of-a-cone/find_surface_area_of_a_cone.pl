print "Enter the radius: ";
my $radius = <STDIN> ;

print "Enter the height: ";
my $height = <STDIN> ;

my $res = surfaceAreaOfCone($hours);
print "Surface area of cone : $res";

sub surfaceAreaOfCone
{
    my ($x) = @_;
    my $res = 3.14 * $radius * ($radius + $height);
    return $res ;   
}
