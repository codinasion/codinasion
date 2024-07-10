print "Enter the feet value : ";
my $inch = <STDIN> ;

my $res = feet2Inches($inch);
print "Inch conversion for the given feet : $res inches";

sub feet2Inches
{
    my ($x) = @_;
    my $res = $x * 12;
    return $res ;   
}
