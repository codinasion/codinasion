print "Enter the length : ";
my $length = <STDIN> ;

print "Enter the width : ";
my $width = <STDIN> ;

print "Enter the height: ";
my $height = <STDIN> ;

my $res = volumeOfCuboid();
print "Volume of cuboid : $res";

sub volumeOfCuboid
{
    my ($x) = @_;
    my $res = $length * $width * $height;
    return $res ;   
}
