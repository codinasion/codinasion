print "Enter the no of weeks : ";
my $weeks = <STDIN> ;

my $res = week2Days($weeks);
print "Days conversion for the given weeks : $res days";

sub week2Days
{
    my ($x) = @_;
    my $res = $x * 7;
    return $res ;   
}
