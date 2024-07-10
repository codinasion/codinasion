print "Enter the Length: ";
my $length = <STDIN> ;

print "Enter the Width: ";
my $width = <STDIN> ;

print "Enter the Height: ";
my $height = <STDIN> ;

my $res = surfaceArea($principal, $interest);
print "Surface area of cuboid: $res";

sub surfaceArea
{
    my ($x) = @_;
    my $res = 2 * ($length * $width +  $length * $height + $width * $height);
    return $res ;   
}
